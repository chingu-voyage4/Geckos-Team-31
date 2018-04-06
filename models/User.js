const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('users', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            defaultValue: '',
            validate: {
                notEmpty: { msg: 'The e-mail field is empty!' },
                isEmail: { msg: 'Please enter a valid e-mail!' }
            }
        },
        password: {
            type: DataTypes.STRING,
            defaultValue: '',
            validate: {
                notEmpty: { msg: 'The password field is empty!' }
            }
        },
        location: {
            type: DataTypes.STRING,
            defaultValue: 'toronto',
            validate: {
                notEmpty: {msg: 'The Location field is empty!'}
            }
        },
        plan: {
            type: DataTypes.STRING,
            defaultValue: 'lunch a bunch',
            validate: {
                isIn: {
                    args: [['lunch a bunch', 'lunch a lot']],
                    msg: 'Invalid plan selected!'
                }
            }
        },
        favorites: {
            type: DataTypes.ARRAY(DataTypes.UUID),
            defaultValue: []
        }
    }, {
        timestamps: false,
        hooks: {
            beforeCreate: (user, options) => {
                return new Promise((resolve, reject)=>{
                    bcrypt.hash(user.dataValues.password, saltRounds)
                    .then(hashedPassword => {
                        user.password = hashedPassword;
                        resolve(user, options);
                    });
                })
            }
        }
    });

    User.login = async function (email, password, callback) {
        const matchedUser = await this.findOne({ where: { email: email } , attributes: ['email', 'password']})
            .catch(err => callback(err));
        if (!matchedUser) {
            const err = new Error("Account doesn't exist!");
            err.status = 401;
            return callback(err);
        }
        const correctPassword= await bcrypt.compare(password, matchedUser.password)
            .catch(err => callback(err));
        if (!correctPassword) {
            const err = new Error("Incorrect password!");
            err.status = 401;
            return callback(err);
        }
        return callback(null, matchedUser);
    };

    User.register = async function (email, password, callback) {
        const matchedUser = await this.findOne({ where: { email: email } })
            .catch(err => callback(err));
        if (matchedUser) {
            const err = new Error("Account already exists!");
            err.status = 401;
            return callback(err);
        }
        const createdUser = this.create({ email, password })
            .catch(err => {
                err.status = 401;
                return callback(err);
            })
        return callback(null, createdUser);
    };

    User.delete = async function (id, callback) {
        await this.destroy({ where: { id: id } })
            .catch(err => callback(err));
        return callback();
    };

    User.changePassword = async function (id, newPassword, callback) {
        const updatedUser = await this.update({ password: newPassword }, { where: { id: id } })
            .catch(err => callback(err));
            
        if (!updatedUser) {
            const err = new Error('Could not find the user in database!');
            err.status = 401;
            return callback(err);
        }
        return callback();
            
            
    };

    User.sync({ alter: true });

    return User;
};
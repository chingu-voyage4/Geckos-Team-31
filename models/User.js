const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('users', {
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

    User.login = function (email, password, callback) {
        this.findOne({ where: { email: email } })
            .then(user => {
                if (!user) {
                    const err = new Error("Account doesn't exist!");
                    err.status = 401;
                    throw err;
                }
                return bcrypt.compare(password, user.password)
                    .then(match => {
                        if (!match) {
                            const err = new Error("Incorrect password!");
                            err.status = 401;
                            throw err;
                        }
                        return callback(null, user);
                    })
            })
            .catch(err => callback(err))
    };

    User.register = function (email, password, callback) {
        this.findOne({ where: { email: email } })
            .then(user => {
                if (user) {
                    const err = new Error("Account already exists!");
                    err.status = 401;
                    throw err;
                }

                return this.create({ email, password })
                    .then(newUser => callback(null, newUser))
                    .catch(err => {
                        err.status = 401;
                        callback(err);
                    });
            })
            .catch(err => callback(err))
    };

    User.delete = function (id, callback) {
        this.destroy({ where: { id: id } })
            .then(() => callback());
    };

    User.changePassword = function (id, newPassword, callback) {
        this.update({ password: newPassword }, { where: { id: id } })
            .then(user => {
                if (!user) {
                    const err = new Error('Could not find the user in database!');
                    err.status = 401;
                    return callback(err);
                }
                return callback();
            })
            .catch(err => callback(err));
    };

    User.sync({ alter: true });

    return User;
};
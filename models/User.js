module.exports = function(sequelize, DataTypes){
    const User = sequelize.define('users', {
        email:{
            type: DataTypes.STRING,
            unique: true,
            defaultValue: '',
            validate: {
                notEmpty: {msg: 'The e-mail field is empty!'},
                isEmail: {msg: 'Please enter a valid e-mail!'}
            }
        },
        password: {
            type: DataTypes.STRING,
            defaultValue: '',
            validate: {
                notEmpty: {msg: 'The password field is empty!'}
            }
        },
        location: {
            type: DataTypes.STRING,
            defaultValue: '',
            validate: {
                notEmpty: {msg: 'The Location field is empty!'}
            }
        }
    }, {
        timestamps: false
    });

    User.login = function({email, password}, callback){
        this.findOne({where:{email:email}})
        .then(user=>{
            if(!user){
                const err = new Error("Account doesn't exist!");
                err.status = 401;
                throw err;
            }
            if(user.password!=password){
                const err = new Error("Incorrect password!");
                err.status = 401;
                throw err;
            }
            return callback(null, user);
        })
        .catch(err=>callback(err))
    };

    User.register = function({email, password, location}, callback){
        this.findOne({where:{email:email}})
        .then(user=>{
            if(user){
                const err = new Error("Account already exists!");
                err.status = 401;
                throw err;
            }
            
            this.create({
                email: email,
                password: password,
                location: location
            })
            .then(newUser => callback(null, newUser))
            .catch(err => { //set Model validators error status code to 401
                err.status = 401;
                callback(err);
            });

            return callback(null, user);
        })
        .catch(err=>callback(err))
    };
    User.delete = function(id, callback){
        this.destroy({where:{id:id}})
        .then(()=>callback());
    }

    User.changePassword = function(id, newPassword, callback){
        this.update({password: newPassword}, {where: {id: id}})
        .then(user => {
            if(!user){
                const err = new Error('Could not find the user in database!');
                err.status = 401;
                return callback(err);
            }
            return callback();
        })
        .catch(err=> callback(err));
    };

    User.sync();

    return User;
};
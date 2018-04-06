const nodeMailer = require('nodemailer');

module.exports.user_register_get = function (req, res, next) {
    res.sendFile('register-page.html', {
        root: './views/'
    });
};

module.exports.user_login_get = function (req, res, next) {
    res.sendFile('login-page.html', {
        root: './views/'
    })
};

module.exports.user_register_post = function (req, res, next) {
    const User = req.models.User;
    const {email, password, location} = req.body;

    User.register(email, password, function (err, newUser) {
        if (err) return next(err);
        if (newUser) {
            req.session.user = newUser;
            return res.send("You're now registered!");
        };
    });

    // res.sendFile('index.html', {root: './views/'});
};

module.exports.user_login_post = function (req, res, next) {
    const User = req.models.User;
    const { email, password } = req.body;

    User.login(email, password, function (err, user) {
        if (err) return next(err);
        if (user) {
            req.session.user = user
            return res.send("You are now logged in!");
        };
    });

    // res.send('This is the login_post page');
};

module.exports.user_logout = function (req, res, next) {
    if (req.session && req.session.user) {
        req.session.destroy(err => {
            if (err) return next(err);
            return res.send('You are now logged out!');
        });
    } else {
        const err = new Error('You are already logged out!');
        err.status = 401;
        return next(err);
    };
};

module.exports.require_login = function (req, res, next) {
    const User = req.models.User;
    if (req.session && req.session.user) {
        User.findOne({ where: { id: req.session.user.id } })
            .then(match => {
                if (!match) return res.redirect('/login');
                else return next();
            })
            .catch(err => next(err))
    } else return res.redirect('/login');
};

// to be replaced
module.exports.user_get = function (req, res, next) {
    res.send(req.session.user);
};

module.exports.user_change_password = function (req, res, next) {
    const newPassword = req.body.password;
    req.models.User.changePassword(req.session.user.id, newPassword, function (err) {
        if (err) return next(err);
        return res.send('Your password has been changed!');
    });
};
module.exports.user_delete = function (req, res, next) {
    req.models.User.delete(req.session.user.id, function (err) {
        if (err) return next(err);
        return res.send('Your account has been deleted!');
    });
};

//invite a friend
module.exports.invite_friend_post = function(req, res, next){
    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'example@gmail.com',
            pass: 'example'
        }
    });
    const mailOptions = {
        from: 'example@gmail.com',
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if(err) return next(err);
        return res.send(`Email send to ${req.body.to}`);
    });
}
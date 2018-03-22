module.exports.user_register_get = function(req, res, next){
    res.sendFile('register-page.html', {root: './views/'});
};

module.exports.user_login_get = function(req, res, next){
    res.sendFile('login-page.html', {root: './views/'})
};

module.exports.user_register_post = function(req, res, next){
    const User = req.models.User;
    User.register(req, function(err, newUser){
        if(err) return next(err);
        if(newUser) return res.send(newUser);
    })

    // res.sendFile('index.html', {root: './views/'});
};

module.exports.user_login_post = function(req, res, next){
    const User = req.models.User;
    User.login(req, function(err, user){
        if(err) return next(err);
        if(user) return res.send(user);
    });

    // res.send('This is the login_post page');
};

module.exports.user_logout_post = function(req, res, next){
    res.send('This is the logout_post page');
};
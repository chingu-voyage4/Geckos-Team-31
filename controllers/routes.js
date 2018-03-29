// Index for controllers
const express = require("express");
const router = express.Router();

const UserController = require('./user-controller.js')
const PostController = require('./post-controller.js')

/*
  serve static landing page 
*/
router.get("/", (req, res) => {
  res.sendFile('landing-page.html', {
    root: './views/'
  });
});

/*
  authentication routes
*/
router.get("/register", UserController.user_register_get);
router.get("/login", UserController.user_login_get);
router.post("/register", UserController.user_register_post);
router.post("/login", UserController.user_login_post);
router.get("/logout", UserController.user_logout);
router.post("/logout", UserController.user_logout);

/*
  lunch routes
*/
router.get("/home", UserController.require_login, PostController.index_get);


/*
  authorized API routes
*/
router.post("/api/user/change-password", 
  UserController.require_login, 
  UserController.user_change_password);
router.delete("/api/user/delete-user", 
  UserController.require_login, 
  UserController.user_delete);


module.exports = router;

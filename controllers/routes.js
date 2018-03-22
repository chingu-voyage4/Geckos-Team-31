// Index for controllers
const express = require("express");
const router = express.Router();

const UserController = require('./user-controller.js')

/*
  serve static asssets from public folder
*/
router.use(express.static('./public'));

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
router.post("/logout", UserController.user_logout_post);

// router.get("/lunch")
module.exports = router;

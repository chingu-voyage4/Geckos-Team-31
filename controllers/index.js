// Index for controllers
const express = require("express");
const router = express.Router();

const UserController = require('./user-controller.js')

router.use(express.static('./public'));

router.get("/", (req, res) => {
  res.sendFile('index.html', {root: './'});
});

router.post("/register", UserController.user_register_post);
router.post("/login", UserController.user_login_post);
router.post("/logout", UserController.user_logout_post);

module.exports = router;
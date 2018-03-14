// Index for controllers
const express = require("express");
const router = express.Router();

router.use(express.static('./public'));

router.get("/", (req, res) => {
  res.sendFile('index.html', {root: './'});
});

module.exports = router;
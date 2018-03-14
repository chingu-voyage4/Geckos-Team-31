const express = require("express");
const bodyParser = require("body-parser");
const app = express();

require('dotenv').config();

app.use("/", require("./controllers/routes.js"));

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started. App listening on ${PORT}`));
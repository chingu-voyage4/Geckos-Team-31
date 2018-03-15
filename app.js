const express = require("express");
const bodyParser = require("body-parser");
const app = express();

/*
    process.env will be populated from the .env file
*/
require('dotenv').config();

/*
    use the bodyParser middleware to populate request body as an object in Request.body
*/
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(jsonParser, urlencodedParser);

/*
    use router in controllers folder for all routing
*/
app.use("/", require("./controllers/routes.js"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started. App listening on ${PORT}`));
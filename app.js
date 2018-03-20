const express = require("express");
const Sequelize = require('sequelize'); 
const bodyParser = require("body-parser");
const app = express();

/*
    process.env will be populated from the .env file
*/
require('dotenv').config();

/*
    initialize and connect to postgres database using sequelize ORM
*/
const {PGUSER, PGPASSWORD, PGHOST, PGPORT, PGDATABASE} = process.env;
const sequelize = new Sequelize(
    `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`
);

sequelize.authenticate()
.then(()=>console.log('Database connection has been established successfully!'))
.catch((err)=>console.error(err));

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

/*
    for any unconfigured routes
*/
app.get('*', (req, res, next)=>res.send('Here lies nothing!'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started. App listening on ${PORT}`));
const express = require("express"); 
const app = express();

const bodyParser = require("body-parser");
const logger = require('morgan');

const session = require("express-session");
const Sequelize = require('sequelize');
const SequelizeStore = require('connect-session-sequelize')(session.Store); //initialize sequelize with session store

const router = require("./controllers/routes.js");
const configDB = require('./config/connection.js');

/*
    process.env will be populated from the .env file
*/
require('dotenv').config();

/*
    initialize and connect to postgres database using sequelize ORM
*/
const {PGUSER, PGPASSWORD, PGHOST, PGPORT, PGDATABASE} = configDB;
const sequelize = new Sequelize(
    `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`
);

sequelize.authenticate()
.then(()=>console.log('Database connection has been established successfully!'))
.catch((err)=>console.error(err));

/*
    all the models are made available at Request.models object
*/
const UserModel = sequelize.import('./models/User.js'); //same as require('./models/User.js')(sequelize, Sequelize)
app.use((req, res, next) => { 
    req.models = {
        User: UserModel
    };
    next();
});

/*
    set up express application
*/
app.use(logger('tiny')); //logs request to the server in the console
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(jsonParser, urlencodedParser); //populate request body into Request.body

const store = new SequelizeStore({
    db: sequelize
});
const sessOptions = {
    secret: 'super fishy bears wander',
    cookie: {httpOnly: true, secure: false},
    resave: false,
    saveUninitialized: false,
    store: store
}
app.use(session(sessOptions));
store.sync();

/*
  serve static asssets from public folder
*/
app.use(express.static('./public'));

/*
    routing
*/
app.use("/", router); //uses router from controllers/routes.js
app.use((req, res, next)=>{ //for unconfigured routes
    const err = new Error('Here lies nothing!');
    err.status = 401;
    next(err);
}); 
app.use((err, req, res, next)=> { //error handler
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started. App listening on ${PORT}`));
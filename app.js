const express = require('express');
const cors = require('cors');
const slash = require('express-slash');


// Controllers
const psyRouter = require('./api/psy/routes');
const scheduleRouter = require('./api/schedule/routes');
const patientRouter = require('./api/patient/routes');
const sessionRouter = require('./api/session/routes');

// Initialization
const app = express();


// Settings
app.set('port', 3000);


// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Routes
app.use('/', psyRouter);
app.use('/', scheduleRouter);
app.use('/', patientRouter);
app.use('/', sessionRouter);

app.use(slash());


module.exports = app;

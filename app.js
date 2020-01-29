require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// create express app
const app = express();
const something = require('./src/router/something');
const bloodGroup = require('./src/router/bloodGroupRoutes');
const countryGroup = require('./src/router/countryGroupRoutes');
const stateGroup = require('./src/router/stateGroupRoutes');
const districtGroup = require('./src/router/districtGroupRoutes');
const userGroup = require('./src/router/userGroupRoutes');
const EmailData = require('./src/router/getEmailRoute');
// Database connection;
mongoose.connect(process.env.dbConnection , {useNewUrlParser: true});

// Middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// define a simple route
// app.get('/', (req, res) => {
//     res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
// });


// All ROutes define 
app.use('/', something);
app.use('/blood_Group' , bloodGroup);
app.use('/country_group', countryGroup );
app.use('/state_group', stateGroup);
app.use('/district_group' , districtGroup);
app.use('/user_group' , userGroup);
app.use('/email_data' , EmailData)
// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
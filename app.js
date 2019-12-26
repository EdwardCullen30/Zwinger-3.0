//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

const app = express();



app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));



//setting ejs as view engine
// app.use(expressLayouts);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Routes
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));




app.listen(3000, function() {
  console.log("Server started on port 3000");
});

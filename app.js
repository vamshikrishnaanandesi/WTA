var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');
app.use('/users', UserController);

var ApplicationController = require('./application_form/applicationController');
app.use('/appl_form', ApplicationController)

module.exports = app;
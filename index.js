'use strict';

var express = require('express');
var stormpath = require('express-stormpath');

// Globals
var app = express();

// Middlewares
app.use(stormpath.init(app));

// Server
app.listen(process.env.PORT || 3000);

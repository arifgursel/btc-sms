'use strict';

var express = require('express');
var stormpath = require('express-stormpath');

var publicRoutes = require('./routes/public');

// Globals
var app = express();

// Application settings
app.set('view engine', 'jade');
app.set('views', './views');
app.locals.siteTitle = 'My API Service';

// Middlewares
app.use('/static', express.static('./bower_components', {
  index: false,
  redirect: false
}));
app.use(stormpath.init(app));

// Routes
app.use('/', publicRoutes);

// Server
app.listen(process.env.PORT || 3000);

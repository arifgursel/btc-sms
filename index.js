'use strict';

var async = require('async');
var express = require('express');
var stormpath = require('express-stormpath');

var privateRoutes = require('./routes/private');
var publicRoutes = require('./routes/public');

// Globals
var app = express();

// Application settings
app.set('view engine', 'jade');
app.set('views', './views');
app.locals.siteTitle = 'My API Service';

// Middlewares
app.use('/static', express.static('./static', {
  index: false,
  redirect: false
}));
app.use('/static', express.static('./bower_components', {
  index: false,
  redirect: false
}));
app.use(stormpath.init(app, {
  enableAccountVerification: true,
  expandApiKeys: true,
  expandCustomData: true,
  redirectUrl: '/dashboard',
  secretKey: 'blah',
  postRegistrationHandler: function(account, req, res, next) {
    async.parallel([
      // Set the user's account balance to 0.
      function(cb) {
        account.customData.balance = 0;
        account.customData.save(function(err) {
          if (err) return cb(err);
          cb();
        });
      },
      // Create an API key for this user.
      function(cb) {
        account.createApiKey(function(err, key) {
          if (err) return cb(err);
          cb();
        });
      }
    ], function(err) {
      if (err) return next(err);
      next();
    });
  }
}));

// Routes
app.use('/', publicRoutes);
app.use('/dashboard', stormpath.loginRequired, privateRoutes);

// Server
app.listen(process.env.PORT || 3000);

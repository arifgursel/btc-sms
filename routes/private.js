'use strict';

var express = require('express');
var stormpath = require('express-stormpath');

// Globals
var router = express.Router();

// Middlewares
router.use(function(req, res, next) {
  var apiKeys = [];

  req.user.apiKeys.each(function(key, cb) {
    apiKeys.push(key);
    cb();
  }, function(err) {
    if (err) return next(err);
    res.locals.apiKeys = apiKeys;
    next();
  });
});

// Routes
router.get('/', function(req, res) {
  res.render('dashboard');
});

// Exports
module.exports = router;

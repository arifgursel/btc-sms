'use strict';

var express = require('express');
var stormpath = require('express-stormpath');

// Globals
var router = express.Router();

// Routes
router.get('/', function(req, res) {
  res.render('dashboard');
});

// Exports
module.exports = router;

'use strict';

var express = require('express');

// Globals
var router = express.Router();

// Routes
router.get('/', function(req, res) {
  res.render('index');
});

// Exports
module.exports = router;

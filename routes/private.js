'use strict';

var bodyParser = require('body-parser');
var express = require('express');
var stormpath = require('express-stormpath');
var stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Globals
var router = express.Router();

// Middlewares
router.use(bodyParser.urlencoded({ extended: true }));

// Routes
router.get('/', function(req, res) {
  res.render('dashboard');
});

router.post('/charge', function(req, res, next) {
  stripe.charges.create({
    amount: 2000,
    currency: 'usd',
    source: req.body.stripeToken,
    description: 'One time deposit for ' + req.user.email + '.'
  }, function(err, charge) {
    if (err) return next(err);
    req.user.customData.balance += charge.amount;
    req.user.customData.save(function(err) {
      if (err) return next(err);
      res.redirect('/dashboard');
    });
  });
});

// Exports
module.exports = router;

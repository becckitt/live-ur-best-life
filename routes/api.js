// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Quote = require('../models/quote');

// Routes
Quote.methods(['get']);
Quote.register(router, '/quotes')

// Return router
module.exports = router;
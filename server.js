// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var uriString = 
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://localhost/live-ur-best-life';
var port = process.env.PORT || 3000;


// MongoDB
mongoose.connect(uriString, function (err, res) {
  if (err) {
    console.log("Hey it looks like there's been an error connecting to: " + uriString + " but the specific error is: " + err);
  } else {
    console.log("hey cool it's running on " + port + " look at you starting up servers way to go");
  }
});

// Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(port);
console.log("listenin' on " + port);
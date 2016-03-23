// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var quoteSchema = new mongoose.Schema({
  quote_content: String,
  author: String,
  mood: String
});


// Return model
module.exports = restful.model('Quotes', quoteSchema);
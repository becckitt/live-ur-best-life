// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var quoteSchema = new mongoose.Schema({
  id: Number,
  quote_content: String,
  author: String,
  mood: String
});


// Return model
module.exports = restful.model('Quotes', quoteSchema);
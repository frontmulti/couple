var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pictureSchema = new Schema({
  title: String,
  description: String,
  image_src: String,
  thumbnail_src: String
});

module.exports = mongoose.model('picture', pictureSchema);

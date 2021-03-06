//Require Mongoose
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var WorldSchema = new Schema({
    world_name: String,
    text_description: String,
    tags: [String],
    images: [String]
    /* this array is for file paths */
});

// Virtual for World's Name
WorldSchema
.virtual('name')
.get(function () {
  return this.name;
});

// Virtual for opening Character url
WorldSchema
.virtual('url')
.get(function () {
  return '/catalog/author/' + this._id;
});

// Compile model from schema
var WorldModel = mongoose.model('Worlds', WorldSchema );

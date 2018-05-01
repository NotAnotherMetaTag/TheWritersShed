//Require Mongoose
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CharactersSchema = new Schema({
    name: String,
    age: Number,
    dob: Date,
    text_description: String,
    world: [String],
    images: [String],
    /* this entry is for a filepath */
    tags: [String]
    /* this array is for file paths */
});

// Virtual for Character's Name
CharactersSchema
.virtual('cname')
.get(function () {
  return this.name;
});

// Virtual for opening Character url
CharactersSchema
.virtual('url')
.get(function () {
  return '/catalog/author/' + this._id;
});

// Compile model from schema
var CharacterModel = mongoose.model('Characters', CharactersSchema );

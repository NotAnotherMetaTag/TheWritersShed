//Require Mongoose
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StoriesSchema = new Schema({
    story_title: String,
    date_created: Date,
    date_of_events: Date,
    file: String,
    /* this entry is for a filepath */
    tags: [String]
    /* this array is for file paths */
});

// Virtual for Story's title
StoriesSchema
.virtual('title')
.get(function () {
  return this.title;
});

// Virtual for opening story url
StoriesSchema
.virtual('filepath')
.get(function () {
  return '/catalog/author/' + this.file;
});

// Compile model from schema
var StoryModel = mongoose.model('Stories', StoriesSchema );

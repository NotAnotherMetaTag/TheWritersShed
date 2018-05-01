var Story = require('../models/StoriesSchema');
var Character = require('../models/CharactersSchema');
var World = require('../models/WorldsSchema');
var connect = require('../Stories.js')

var async = require('async');
const url = 'mongodb://localhost/WriterTool';

exports.index = function(req, res) {
        res.render('/views/index', { title: 'Story Repo Home', error: err, data: results });
};

// Display list of all stories.
exports.story_list = function(req, res) {
  connect.queryAllStories().res.send(result);

    //if successful, render
    res.render('/views/storylist', {title: 'Story List', story_list: stories_list });

  };

// Display detail page for a specific Story.
exports.story_detail = function(req, res) {
    res.send('NOT IMPLEMENTED' + req.params.id);
};

// Display Story add form on GET.
exports.story_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED');
};

// Handle Story add on POST.
exports.story_create_post = function(req, res) {
    res.send('NOT IMPLEMENTE');
};

// Display Story delete form on GET.
exports.story_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED');
};

// Handle Story delete on POST.
exports.story_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED');
};

// Display Story update form on GET.
exports.story_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED');
};

// Handle Story update on POST.
exports.story_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED');
};

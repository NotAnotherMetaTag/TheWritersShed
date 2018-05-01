var world = require('../models/WorldsSchema');


var async = require('async');
const url = 'mongodb://localhost/WriterTool';

// Display list of all Worlds.
exports.world_list = function(req, res) {
    var connect = require('../Worlds.js')
    res.render(connect.queryAllWorlds());
    /**
    res.render('/views/index', {title: 'Story List', worlds_list: list_worlds });
    */
};

// Display detail page for a specific World
exports.world_detail = function(req, res) {
    res.send('NOT IMPLEMENTED ' + req.params.id);
};

// Display World add form on GET.
exports.world_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED');
};

// Handle World add on POST.
exports.world_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED');
};

// Display World delete form on GET.
exports.world_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED');
};

// Handle World delete on POST.
exports.world_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED');
};

// Display World update form on GET.
exports.world_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED');
};

// Handle World update on POST.
exports.world_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED');
};

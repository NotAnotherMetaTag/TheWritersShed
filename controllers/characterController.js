var character = require('../models/CharactersSchema');

// Display list of all Characters
exports.character_list = function(req, res) {
  Characters.find({}, 'name')
  .populate('name')
  .exec(function (err, list_characters) {
    if (err) { return next(err); }
    //Successful, so render
    res.render('character_list', { title: 'Character List', character_list: list_characters });
  });
};

// Display detail page for a specific Character
exports.character_detail = function(req, res) {
    res.send('NOT IMPLEMENTED ' + req.params.id);
};

// Display Character add form on GET.
exports.character_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED');
};

// Handle Character add on POST.
exports.character_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED');
};

// Display Character delete form on GET.
exports.character_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED');
};

// Handle Character delete on POST.
exports.character_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED');
};

// Display Character update form on GET.
exports.character_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED');
};

// Handle Character update on POST.
exports.character_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED');
};

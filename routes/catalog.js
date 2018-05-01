var express = require('express');
var router = express.Router();

// Require controller modules.
var story_controller = require('../controllers/storyController');
var world_controller = require('../controllers/worldsController');
var character_controller = require('../controllers/characterController');


/// BOOK ROUTES ///

// GET catalog home page.
router.get('/', story_controller.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/stories/create', story_controller.story_create_get);

// POST request for creating Book.
router.post('/stories/create', story_controller.story_create_post);

// GET request to delete Book.
router.get('/stories/:id/delete', story_controller.story_delete_get);

// POST request to delete Book.
router.post('/stories/:id/delete', story_controller.story_delete_post);

// GET request to update Book.
router.get('/stories/:id/update', story_controller.story_update_get);

// POST request to update Book.
router.post('/stories/:id/update', story_controller.story_update_post);

// GET request for one Book.
router.get('/stories/:id', story_controller.story_detail);

// GET request for list of all Book items.
router.get('/stories', story_controller.story_list);

/// AUTHOR ROUTES ///

// GET request for creating Worlds. NOTE This must come before route for id (i.e. display world).
router.get('/world/create', world_controller.world_create_get);

// POST request for creating Worlds.
router.post('/world/create', world_controller.world_create_post);

// GET request to delete Worlds.
router.get('/world/:id/delete', world_controller.world_delete_get);

// POST request to delete Worlds.
router.post('/world/:id/delete', world_controller.world_delete_post);

// GET request to update Worlds.
router.get('/world/:id/update', world_controller.world_update_get);

// POST request to update Worlds.
router.post('/world/:id/update', world_controller.world_update_post);

// GET request for one Worlds.
router.get('/world/:id', world_controller.world_detail);

// GET request for list of all Worldss.
router.get('/worlds', world_controller.world_list);

/// GENRE ROUTES ///

// GET request for creating a Characters. NOTE This must come before route that displays Characters (uses id).
router.get('/character/create', character_controller.character_create_get);

//POST request for creating Characters.
router.post('/character/create', character_controller.character_create_post);

// GET request to delete Characters.
router.get('/character/:id/delete', character_controller.character_delete_get);

// POST request to delete Characters.
router.post('/character/:id/delete', character_controller.character_delete_post);

// GET request to update Characters.
router.get('/character/:id/update', character_controller.character_update_get);

// POST request to update Characters.
router.post('/character/:id/update', character_controller.character_update_post);

// GET request for one Characters.
router.get('/character/:id', character_controller.character_detail);

// GET request for list of all Characters.
router.get('/characters', character_controller.character_list);

/// BOOKINSTANCE ROUTES ///


module.exports = router;

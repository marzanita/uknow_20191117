var express = require('express');
var router = express.Router();

var mainController = require('./controllers/main.controller');

module.exports = router;

// Setup routes
router.get('/', mainController.home);
router.get('/epicuniverse', mainController.epicUniverse);
router.get('/mardigras', mainController.mardiGras);

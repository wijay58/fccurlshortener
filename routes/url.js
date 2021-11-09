const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user.js');

// routes
router.post('/shorturl', user_controller.createShortUrl);
router.get('/shorturl/:id', user_controller.goToUrl);

module.exports = router;

const express = require('express');
const router = express.Router();
const googleController = require('../controller/google.controller');


router.get('/login', googleController.googleLogin);
router.get('/callback', googleController.googleCallback);
router.post('/add-event', googleController.eventExample);

module.exports = router;

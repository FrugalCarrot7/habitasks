const express = require('express');
const router = express.Router();
const roomsCtrl = require('../../controllers/api/rooms')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.post('/property/:selectedProperty/rooms', ensureLoggedIn, roomsCtrl.create);



module.exports = router;
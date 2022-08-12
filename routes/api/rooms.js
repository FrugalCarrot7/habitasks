const express = require('express');
const router = express.Router();
const roomsCtrl = require('../../controllers/api/rooms')

router.post('/create', roomsCtrl.create);



module.exports = router;
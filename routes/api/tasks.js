const express = require('express');
const router = express.Router();
const tasksCtrl = require('../../controllers/api/tasks')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/:selectedProperty/:selectedRoom/index', ensureLoggedIn, tasksCtrl.index);
router.post('/property/:selectedProperty/room/:selectedRoom', ensureLoggedIn, tasksCtrl.create);



module.exports = router;
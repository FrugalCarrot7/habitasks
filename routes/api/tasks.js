const express = require('express');
const router = express.Router();
const tasksCtrl = require('../../controllers/api/tasks')

router.get('/:selectedProperty/:selectedRoom/index', tasksCtrl.index);
router.post('/property/:selectedProperty/room/:selectedRoom', tasksCtrl.create);



module.exports = router;
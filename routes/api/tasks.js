const express = require('express');
const router = express.Router();
const tasksCtrl = require('../../controllers/api/tasks')

router.post('/property/:selectedProperty/room/:selectedRoom', tasksCtrl.create);



module.exports = router;
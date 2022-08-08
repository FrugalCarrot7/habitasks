const express = require('express');
const router = express.Router();
const propertiesCtrl = require('../../controllers/api/properties')

router.get('/properties', propertiesCtrl.index);


module.exports = router;
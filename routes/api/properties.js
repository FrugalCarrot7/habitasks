const express = require('express');
const router = express.Router();
const propertiesCtrl = require('../../controllers/api/properties')

router.get('/index', propertiesCtrl.index);
router.post('/create', propertiesCtrl.create);
router.delete('/delete/:id', propertiesCtrl.delete);


module.exports = router;
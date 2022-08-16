const express = require('express');
const router = express.Router();
const propertiesCtrl = require('../../controllers/api/properties')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/index', ensureLoggedIn, propertiesCtrl.index);
router.post('/create', ensureLoggedIn, propertiesCtrl.create);
router.get(`/:selectedProperty`, ensureLoggedIn, propertiesCtrl.show)
router.delete('/delete/:id', ensureLoggedIn, propertiesCtrl.delete);
router.put('/:id', ensureLoggedIn, propertiesCtrl.update);


module.exports = router;
const router = require('express').Router();
const groupCtrl = require('../controllers/country-Group-controller');

router.get('/', groupCtrl.getcountryGroup);


module.exports = router;
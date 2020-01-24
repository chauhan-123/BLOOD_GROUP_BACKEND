const router = require('express').Router();
const groupCtrl = require('../controllers/country-Group-controller');

router.post('/', groupCtrl.getcountryGroup);


module.exports = router;
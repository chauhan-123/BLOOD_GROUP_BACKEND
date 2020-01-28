const router = require('express').Router();
const groupCtrl = require('../controllers/district-group-controller');

router.get('/', groupCtrl.getdistrictGroup);


module.exports = router;
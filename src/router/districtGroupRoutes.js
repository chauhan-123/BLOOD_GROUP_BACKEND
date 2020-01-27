const router = require('express').Router();
const groupCtrl = require('../controllers/district-group-controller');

router.post('/', groupCtrl.getdistrictGroup);


module.exports = router;
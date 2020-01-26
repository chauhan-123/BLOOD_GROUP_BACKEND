const router = require('express').Router();
const groupCtrl = require('../controllers/blood-group.controller');

router.get('/', groupCtrl.getBloodGroup);


module.exports = router;
const router = require('express').Router();
const groupCtrl = require('../controllers/blood-group.controller');

router.post('/', groupCtrl.getBloodGroup);


module.exports = router;
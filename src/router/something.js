const router = require('express').Router();
const groupCtrl = require('../controllers/blood-group.controller');

router.get('/', groupCtrl.getBloodGroup);

router.get('/a', );

router.get('/s', );

router.get('/f', );

module.exports = router;
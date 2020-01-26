const router = require('express').Router();
const groupCtrl = require('../controllers/state-Group-controller');

router.get('/', groupCtrl.getstateGroup);


module.exports = router;
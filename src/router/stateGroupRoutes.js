const router = require('express').Router();
const groupCtrl = require('../controllers/state-Group-controller');

router.post('/', groupCtrl.getstateGroup);


module.exports = router;
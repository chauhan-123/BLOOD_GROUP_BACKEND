const router = require('express').Router();
const groupCtrl = require('../controllers/user-group-controller');

router.post('/', groupCtrl.getuserGroup);


module.exports = router;
const router = require('express').Router();
const groupCtrl = require('../controllers/get-email-controller');

router.post('/', groupCtrl.getEmailInformation);


module.exports = router;
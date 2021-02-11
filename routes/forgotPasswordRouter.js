const router = require('express').Router();
const forgotPasswordController = require('../controllers/forgotPasswordController');

router.post('/', forgotPasswordController.sendMail);

module.exports = router;
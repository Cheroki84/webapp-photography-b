const router = require('express').Router();
const resetPasswordController = require('../controllers/resetPasswordController');
const { User } = require('../models');

router.put('/:id/:tokenresetpassword', resetPasswordController.reset);

module.exports = router;
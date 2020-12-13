const router = require('express').Router();
const UserController = require('../controllers/userController');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.put('/logout/:email', UserController.logout);

module.exports = router;
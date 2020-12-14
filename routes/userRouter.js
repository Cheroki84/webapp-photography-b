const router = require('express').Router();
const UserController = require('../controllers/userController');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.put('/logout/:email', UserController.logout);
router.delete('/delete', UserController.delete);
router.get('/allUsers', UserController.getAll);
router.put('/update/:id', UserController.update);

module.exports = router;
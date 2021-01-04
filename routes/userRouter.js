const router = require('express').Router();
const UserController = require('../controllers/userController');
const auth = require('../middleware/auth');
const checkRole = require('../middleware/checkRole');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.put('/logout/:email', UserController.logout);
router.delete('/delete', UserController.delete);
router.get('/allUsers', auth, checkRole(['admin']), UserController.getAll);
router.get('/userById/:id', auth, UserController.getById);
router.put('/update/:id', UserController.update);

module.exports = router;
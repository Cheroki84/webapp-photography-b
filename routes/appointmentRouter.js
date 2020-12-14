const router = require('express').Router();
const AppointmentController = require('../controllers/appointmentController');
const auth = require('../middleware/auth');

router.post('/create', auth, AppointmentController.create);

module.exports = router;
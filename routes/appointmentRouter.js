const router = require('express').Router();
const AppointmentController = require('../controllers/appointmentController');
const auth = require('../middleware/auth');

router.post('/create', auth, AppointmentController.create);
router.put('/update/:id', auth, AppointmentController.update);

module.exports = router;
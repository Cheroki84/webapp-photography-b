const router = require('express').Router();
const AppointmentController = require('../controllers/appointmentController');
const auth = require('../middleware/auth');

router.post('/create', auth, AppointmentController.create);
router.put('/update/:id', auth, AppointmentController.update);
router.delete('/delete/:id', auth, AppointmentController.delete);
router.delete('/deleteByDateAppointmentId/:DateappointmentId', auth, AppointmentController.deleteByDateAppointmentId);
router.get('/allAppointments', auth, AppointmentController.getAll);
router.get('/allWithUsers', auth, AppointmentController.getAllWithUsers);
router.get('/byUserId/:UserId', auth, AppointmentController.getByUserId);

module.exports = router;
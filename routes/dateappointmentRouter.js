const router = require('express').Router();
const DateappointmentController = require('../controllers/dateappointmentController');

router.post('/create', DateappointmentController.create);
router.get('/allDates', DateappointmentController.getAll);
router.delete('/delete/:id', DateappointmentController.delete);
router.get('/getById/:id', DateappointmentController.getById);
router.get('/availableDates', DateappointmentController.getAvailables);
router.put('/update/:id', DateappointmentController.update);

module.exports = router;
const router = require('express').Router();
const DateappointmentController = require('../controllers/dateappointmentController');

router.post('/create', DateappointmentController.create);
router.get('/allDates', DateappointmentController.getAll);
router.delete('/delete/:id', DateappointmentController.delete);
router.get('/availableDates', DateappointmentController.getAvailables);

module.exports = router;
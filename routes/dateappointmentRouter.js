const router = require('express').Router();
const DateappointmentController = require('../controllers/dateappointmentController');

router.post('/create', DateappointmentController.create);
router.get('/allDates', DateappointmentController.getAll);

module.exports = router;
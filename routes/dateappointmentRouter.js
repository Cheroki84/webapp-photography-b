const router = require('express').Router();
const DateappointmentController = require('../controllers/dateappointmentController');

router.post('/create', DateappointmentController.create);

module.exports = router;
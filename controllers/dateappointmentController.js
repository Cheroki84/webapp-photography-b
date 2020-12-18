const {
    Dateappointment
} = require('../models');
const {
    getAll
} = require('./appointmentController');

const DateappointmentController = {
    async create(req, res) {
        try {
            const dateappointment = await Dateappointment.create({
                date: req.body.date
            });
            res.send({
                message: 'Date created successfully',
                dateappointment
            })
        } catch (error) {
            res.status(500).send({
                message: 'There was a problem trying to create de date',
                error
            });
        }
    },

    async getAll(req, res) {
        try {
            const dateappointments = await Dateappointment.findAll();
            res.status(200).send({
                dateappointments
            })
        } catch (error) {
            res.status(500).send({
                message: 'There was a problem trying to display all dates',
                error
            })
        }
    }
}

module.exports = DateappointmentController;
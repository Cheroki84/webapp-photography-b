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
    },

    async getAvailables(req, res) {
        try {
            const availableDates = await Dateappointment.findAll({
                where: {
                    status: ['Disponible']
                }
            });
            res.status(200).send({
                message: 'List of all available appointments',
                availableDates
            })
        } catch (error) {
            res.status(500).send({
                message: 'There was a problem trying to to displya the dates',
                error
            })
        }
    },

    async delete(req, res) {
        try {
            await Dateappointment.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send({
                message: 'Date successfully deleted'
            });
        } catch (error) {
            res.status(500).send({
                message: 'There was a problem trying to delete the date',
                error
            })
        }
    }
}

module.exports = DateappointmentController;
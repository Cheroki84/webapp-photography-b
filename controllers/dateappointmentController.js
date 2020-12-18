const { Dateappointment } = require('../models');

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
                message: 'There was an error trying to create de date',
                error
            });
        }
    }
}

module.exports = DateappointmentController;
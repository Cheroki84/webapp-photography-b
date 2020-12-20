const { Appointment, User } = require('../models');

const AppointmentController = {
    async create(req, res) {
        try {
            const appointment = await Appointment.create({
                type: req.body.type,
                observations: req.body.observations,
                UserId: req.user.id,
                DateappointmentId: req.body.DateappointmentId
            });
            res.send({
                message: 'Appointment created successfully',
                appointment
            })    
        } catch (error) {
            res.status(500).send({
                message: 'There was an error trying to create the appointment',
                error
            });
        }
        
    },

    async update(req, res) {
        try {
            await Appointment.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            res.status(201).send({
                message: 'The data has been updated successfully'
            });
        } catch (error) {
            res.status(500).send({
                message: 'There was an error trying to update the data',
                error
            })
        }
    },

    async delete(req, res) {
        try {
            await Appointment.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send({
                message: 'Appointment successfully deleted'
            });
        } catch (error) {
            res.status(500).send({
                message: 'There was a problem trying to delete the appointment',
                error
            })
        }
    },

    async getAll(req, res) {
        try {
            const appointments = await Appointment.findAll();
            res.status(200).send({
                message: 'List of all appointments',
                appointments
            })
        } catch (error) {
            res.status(500).send({
                message: 'There was a problem trying to display all appointments',
                error
            })
        }
    },

    async getByUserId(req, res) {
        try {
            const userId = await Appointment.findOne({
                where: {
                    UserId: req.params.UserId
                }
            })
            if (!userId) {
                return res.status(200).send({
                    message: 'UserId not found'
                })
            }
            res.status(200).send(userId)
        } catch (error) {
            res.status(500).send({
                message: 'There was a problem trying to get the appointment for UserId'
            })
        }
    },

    async getAllWithUsers(req, res) {
        try {
            const appointments = await Appointment.findAll({
                include: {
                    model: User
                }
            });
            res.status(200).send({
                message: 'List of all appointments with clients',
                appointments
            })
        } catch (error) {
            res.status(500).send({
                message: 'There was a problem trying to display all appointments with clients',
                error
            })
        }
    }
}

module.exports = AppointmentController;
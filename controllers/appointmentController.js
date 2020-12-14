const { Appointment, User } = require('../models');

const AppointmentController = {
    async create(req, res) {
        try {
            const appointment = await Appointment.create({
                type: req.body.type,
                dateAppointment: req.body.dateAppointment,
                observations: req.body.observations,
                UserId: req.user.id                
            });
            res.send({
                message: 'Cita creada correctamente',
                appointment
            })    
        } catch (error) {
            res.status(500).send({
                message: 'Hubo un error al intentar crear la cita',
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
                message: 'Los datos se han actualizado correctamente'
            });
        } catch (error) {
            res.status(500).send({
                message: 'Hubo un error al intentar actualizar los datos',
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
                message: 'Cita eliminada correctamente'
            });
        } catch (error) {
            res.status(500).send({
                message: 'Hubo un problema al intentar eliminar la cita',
                error
            })
        }
    },

    async getAll(req, res) {
        try {
            const appointments = await Appointment.findAll();
            res.status(200).send({
                message: 'Listado de todas las citas',
                appointments
            })
        } catch (error) {
            res.status(500).send({
                message: 'Hubo un problema al intentar mostrar todas las citas',
                error
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
                message: 'Listado de todas las citas',
                appointments
            })
        } catch (error) {
            res.status(500).send({
                message: 'Hubo un problema al intentar mostrar todas las citas',
                error
            })
        }
    }
}

module.exports = AppointmentController;
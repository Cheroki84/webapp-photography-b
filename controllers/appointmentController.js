const { Appointment } = require('../models');

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
        
    }
}

module.exports = AppointmentController;
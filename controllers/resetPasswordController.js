const { User } = require('../models');
const bcrypt = require('bcrypt');

const ResetPassword = {
    async reset(req, res) {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10)
            const resetPassword = await User.update(req.body, {
                where: {
                    id: req.params.id,
                    tokenresetpassword: req.params.tokenresetpassword
                }
            });
            res.status(201).send({
                message: 'Contraseña cambiada con éxito'
            })
        } catch (error) {
            res.status(500).send({
                message: 'este error',
                error
            })
        }
    }
}

module.exports = ResetPassword;
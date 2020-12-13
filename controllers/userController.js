const { User } = require('../models');
const bcrypt = require('bcrypt');

const UserController = {
    async register(req, res) {
        let regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
        let regExEmail = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;

        if (!regExEmail.test(req.body.email)) {
            res.send({
                message: 'El formato del email no es válido'
            });
            return;
        }

        if (!regExPassword.test(req.body.password)) {
            res.send({
                message: 'El password debe contener al menos: entre 8 y 16 caracteres, 1 número, 1 letra minúscula, 1 letra mayúscula y 1 carácter especial'
            });
            return;
        }

        try {
            req.body.password = await bcrypt.hash(req.body.password, 10)
            const user = await User.create(req.body);
            res.status(201).send({
                message: 'Usuario registrado correctamente',
                user
            })
        } catch (error) {
            res.status(500).send({
                message: 'Hubo un error al intentar hacer el registro',
                error
            });
        }
    }
}

module.exports = UserController;
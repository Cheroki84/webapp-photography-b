const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
    },
    
    async login(req, res) {
        try {
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            })
            if (!user) {
                return res.status(400).send({
                    message: 'Error al introducir los datos'
                });
            }

            const match = await bcrypt.compare(req.body.password, user.password)
            if (!match) {
                return res.status(400).send({
                    message: 'Error al introducir los datos'
                });
            }
            
            const token = jwt.sign({
                id: user.id
            }, 'esternocleidomastoideo', {
                expiresIn: '10d'
            });
            user.token = token;
            await user.save();
            res.status(200).send({
                message: 'Bienvenid@',
                user
            });

        } catch (error) {
            res.status(500).send({
                message: 'Hubo un problema al intentar iniciar sesión',
                error
            })
        }
    }
}

module.exports = UserController;
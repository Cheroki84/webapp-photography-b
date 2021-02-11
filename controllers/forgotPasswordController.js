const { User } = require('../models');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const ForgotPassword = {
    async sendMail(req, res) {
        if (req.body.email == "") {
            res.status(400).send({
                message: 'El email es requerido'
            })
        }

        try {
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            })
            
            if(!user) {
                return res.status(403).send({
                    message: 'No existe ese email'
                })
            }

            const token = jwt.sign({ id: user.id }, 'esternocleidomastoideo', { expiresIn: "1h" });
            user.update({
                tokenResetPassword: token
            });

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: `${process.env.EMAIL_ADDRESS}`,
                    pass: `${process.env.EMAIL_PASSWORD}`,
                }
            });

            const mailOptions = {
                from: 'bot.elbarquitodepapelfi@gmail.com',
                to: `${user.email}`,
                subject: 'Enlace para resetear el password',
                text:
                `http://localhost:3005/reset/${token}`
            };

            transporter.sendMail(mailOptions, (err, response) => {
                if (err) {
                    console.error('hubo un error:', err);
                } else {
                    console.log('esta es la respuesta:', response);
                    res.status(200).json('email de recuperacion enviado');
                }
            })

        } catch (error) {
            res.status(500).send({
                message: 'Hubo un error',
                error
            })
        }

    }
}

module.exports = ForgotPassword;
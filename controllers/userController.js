const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let regExFullName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;
let regExEmail = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
let regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
let regExPhone = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

const UserController = {
    async register(req, res) {
        
        if(!regExFullName.test(req.body.firstname)) {
            res.send({
                message: 'Invalid format for firstname'
            })
            return;
        }

        if(!regExFullName.test(req.body.lastname)) {
            res.send({
                message: 'Invalid format for lastname'
            })
            return;
        }

        if (!regExEmail.test(req.body.email)) {
            res.send({
                message: 'The email format is not valid'
            });
            return;
        }

        if (!regExPassword.test(req.body.password)) {
            res.send({
                message: 'The password must contain at least: between 8 and 16 characters, 1 number, 1 lowercase letter, 1 capital letter and 1 special character'
            });
            return;
        }

        if(!regExPhone.test(req.body.phone)) {
            res.send({
                message: 'Invalid format for phone'
            })
            return;
        }

        try {
            req.body.password = await bcrypt.hash(req.body.password, 10)
            const user = await User.create(req.body);
            res.status(201).send({
                message: 'User successfully registered',
                user
            })
        } catch (error) {
            res.status(500).send({
                message: 'There was an error trying to register',
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
                    message: 'The data entered is not correct'
                });
            }

            const match = await bcrypt.compare(req.body.password, user.password)
            if (!match) {
                return res.status(400).send({
                    message: 'The data entered is not correct'
                });
            }
            
            const token = jwt.sign({
                id: user.id
            }, 'esternocleidomastoideo', {
                expiresIn: '10d'
            });
            user.token = token;
            await user.save();
            res.status(200).send(user);

        } catch (error) {
            res.status(500).send({
                message: 'There was a problem trying to log in',
                error
            })
        }
    },

    async logout(req, res) {
        try {
            const removeToken = {
                token: ""
            };

            const user = await User.update(removeToken, {
                where: {
                    email: req.params.email
                }
            });
            res.status(201).send({
                message: 'See you soon',
                user
            });
        } catch (error) {
            res.status(500).send({
                message: 'There was a problem trying to log out',
                error
            })
        }
    },

    async delete(req, res) {
        try {
            const email = await User.destroy({
                where: {
                    email: req.body.email
                }
            })
            if (!email) {
                return res.status(400).send({
                    message: 'Account not found'
                })
            }
            res.status(200).send({
                message: 'Account successfully deleted'
            })
        } catch (error) {
            res.status(500).send({
                message: 'There was a problem trying to delete the account',
                error
            })
        }
    },

    async getAll(req, res) {
        try {
            const users = await User.findAll();
            res.status(200).send({
                message: 'List of all users',
                users
            })
        } catch (error) {
            res.status(500).send({
                message: 'There was a problem trying to display all users',
                error
            })
        }
    },

    async getById(req, res) {
        try {
            const userId = await User.findOne({
                where: {
                    id: req.params.id
                }
            })
            if (!userId) {
                return res.status(200).send({
                    message: 'User not found'
                })
            }
            res.status(200).send(userId)
        } catch (error) {
            res.status(500).send({
                message:'There was a problem trying to get the user',
                error
            })
        }
    },

    async update(req, res) {
    
        if (!regExEmail.test(req.body.email)) {
            res.send({
                message: 'The email format is not valid'
            });
            return;
        }

        if (!regExPassword.test(req.body.password)) {
            res.send({
                message: 'The password must contain at least: between 8 and 16 characters, 1 number, 1 lowercase letter, 1 capital letter and 1 special character'
            });
            return;
        }

        try {
            req.body.password = await bcrypt.hash(req.body.password, 10)
            const userUpdate = await User.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            res.status(201).send({
                message: 'The data has been updated successfully',
                userUpdate
            })
        } catch (error) {
            res.status(500).send({
                message: 'There was an error trying to update the data',
                error
            });
        }
    },
}

module.exports = UserController;
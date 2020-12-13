const { User } = require('../models');
const jwt = require('jsonwebtoken');

const auth = async(req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, 'esternocleidomastoideo');

        const user = await User.findOne({
            where: {
                token: token
            }
        });
        
        if (!user) {
            return res.status(401).send({
                message: 'No estás autorizado'
            })
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({
            message: 'No estás autorizado',
            error
        })
    }
}

module.exports = auth;
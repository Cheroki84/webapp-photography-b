const express = require('express');
const cors = require('./middleware/cors');
const { sequelize } = require('./models');
const usersRouter = require('./routes/userRouter');
const appointmentRouter = require('./routes/appointmentRouter');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors);
app.use(express.json());

app.use('/users', usersRouter);
app.use('/appointments', appointmentRouter);















app.listen(PORT, function () { 
    console.log(`>>>Server UP on port ${PORT}<<<`);
    sequelize.sync({ force: false })
    .then(() => {
        console.log('>>>Conectado a la base de datos<<<');
    }).catch((err) => {
        console.log('Error al intentar conectar a la base de datos', err);
    })
});
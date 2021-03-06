const express = require('express');
const cors = require('./middleware/cors');
const usersRouter = require('./routes/userRouter');
const appointmentRouter = require('./routes/appointmentRouter');
const dateappointmentRouter = require('./routes/dateappointmentRouter');
const forgotPasswordRouter = require('./routes/forgotPasswordRouter');
const resetPasswordController = require('./routes/resetPasswordRouter');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors);
app.use(express.json());

app.use('/users', usersRouter);
app.use('/appointments', appointmentRouter);
app.use('/dateappointments', dateappointmentRouter);
app.use('/forgotpassword', forgotPasswordRouter);
app.use('/resetpassword', resetPasswordController);


app.listen(PORT, () => console.log(`Server UP on port ${PORT}`));
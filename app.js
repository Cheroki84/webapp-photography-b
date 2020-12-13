const express = require('express');
const cors = require('./middleware/cors');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors);
app.use(express.json());















app.listen(PORT, () => console.log(`>>>Server UP on port ${PORT}<<<`));
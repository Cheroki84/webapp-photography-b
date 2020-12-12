const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola');
});















app.listen(3005, () => {
    console.log('>>> Server ON <<<');
});
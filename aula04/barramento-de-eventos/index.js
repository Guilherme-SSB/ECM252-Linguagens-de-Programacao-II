const express = require('express');
const bodyParser = require('body-parser');
// Enviar eventos para os demais microserviços
const axios = require('axios'); 

const app = express();
app.use(bodyParser.json());

app.post('/eventos', (req, res) => {
    const evento = req.body;

    // Envia o evento para o microsserviço de lembretes
    axios.post('http://localhost:4000/eventos', evento);

    // Envia o evento para o microsserviço de observações
    axios.post('http://localhost:5000/eventos', evento);
    res.status(200);
});

app.listen(10000, () => {
    console.log('Barramento de eventos. Porta 10000.')
});

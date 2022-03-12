const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const app = express();
app.use(bodyParser.json());

const observacoesPorLembreteId = {};

app.post('lembretes/:id/observacoes', (req, res) => {
    const idObs = uuidv4();
    const { texto } = req.body;

    const observacoesDoLembreteId = observacoesPorLembreteId[req.params.id] || [];
    observacoesDoLembreteId.push({ id: idObs, texto });
    observacoesPorLembreteId[req.params.id] = observacoesDoLembreteId;
    res.status(201).send(observacoesDoLembreteId);
});

app.get('lembretes/:id/observacoes', (req, res) => {
    res.send(observacoesPorLembreteId[req.params.id] || []);
});

app.listen(5000, (() => {
    console.log('Lembretes. Porta 5000');
}))

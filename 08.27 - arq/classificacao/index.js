const express = require("express");
const app = express();
app.use(express.json());

const observacoesPorLembreteId = {};
const palavraChave = "importante";
const funcoes = {
    ObservacaoClassificada: (observacao) => {
        const observacoes = observacoesPorLembreteId[observacao.lembreteId];
        const obsParaAtualizar = observacao.find(o => o.id === observacao.id);
        obsParaAtualizar.status = observacao.status;

        axios.post('http://localhost:10000/eventos', {
            tipo: "ObservacaoClassificada",
            dados: {
                id: observacao.id,
                texto: observacao.texto,
                status: observacao.status,
                lembreteId: observacao.lembreteId,
            }
        });
    }
}

app.post('/eventos', (req, res) => {
    console.log(req.body);
    res.status(200).send({ msg: "ok" });
});

app.listen(7000, () => console.log("Classificação. Porta 7000"));

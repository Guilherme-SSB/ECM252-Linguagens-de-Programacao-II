/////////////////////////////////////////////////////
// Requisição
/////////////////////////////////////////////////////
// // Bibliotecas
// const axios = require("axios");


// // Parâmetros
// // Chave de API
// const appid = '6a236fbbf1dfbaa74facbb9e1a3468bf';

// // Cidade desejada
// const q = 'Guarulhos';

// // Unidade de medida de temperatura
// const units = 'metric';

// // Idioma
// const lang = 'pt_BR';

// // Qnt de resultados
// const cnt = '10';

// // URL da API
// const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&appid=${appid}&units=${units}&lang=${lang}&cnt=${cnt}`;


// // Requisição
// axios
//     .get(url)

//     .then((res) => {
//         // Mostra o resultado e devolve somente a parte de interesse
//         console.log(res);
//         return res.data;
//     })

//     .then((res) => {
//         // Mostra o total e devolve o resultado
//         console.log(res.cnt);
//         return res;
//     })

//     .then((res) => {
//         // Devolve somente a lista de previsões
//         console.log("aqui", res);
//         return res["list"];
//     })

//     .then((res) => {
//         // Para cada resultado, mostra algumas informações
//         for (let previsao of res) {
//             console.log(`
//                 ${new Date(+previsao.dt * 1000).toLocaleString()},
//                 ${'Min: ' + previsao.main.temp_min}\u00B0C,
//                 ${'Max: ' + previsao.main.temp_max}\u00B0C,
//                 ${'Hum: ' + previsao.main.humidity}%,
//                 ${previsao.weather[0].description}
//                 `);
//             }
//         return res;
//     })

//     .then((res) => {
//         // Verifica quantas previsões têm percepção humana de tempertura acima de 30 graus
//         const lista = res.filter(r => r.main.feels_like >= 30);
//         console.log(`${lista.length} previsões têm percepção humana de temperatura acima de 30 graus`)
//     })

//     .catch((err) => {
//         console.log(err);
//         console.log('Deu erro.');
//     })

/////////////////////////////////////////////////////
// async
/////////////////////////////////////////////////////
// async function hello(nome) {
//     return "Oi, " + nome;
// }

// const boasVindas = hello('Guilherme');
// console.log(boasVindas);
// boasVindas.then((res) => console.log(res));

/////////////////////////////////////////////////////
// await
/////////////////////////////////////////////////////
function fatorial(n) {
    if (n < 0) {
        return Promise.reject('Valor não pode ser negativo.')
    }

    let res = 1;
    for (let i = 2; i<= n; i++) {
        res *= i;
    }
    return Promise.resolve(`Resposta: ${n}! = ${res}`)
}

function chamadaComThenCatch() {
    fatorial(5)
        .then((res) => console.log(res))
        .catch((res) => console.log(res));

    fatorial(-1)
        .then((res) => console.log(res))
        .catch((res) => console.log(res));
}

chamadaComThenCatch();

async function chamadaComAwait() {
    const f1 = await fatorial(5);
    console.log(f1);

    const f2 = await fatorial(-1);
    console.log(f2);
}

chamadaComAwait();

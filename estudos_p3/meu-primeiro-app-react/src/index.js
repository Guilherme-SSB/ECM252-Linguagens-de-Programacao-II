import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return <h1>Meu primeiro componente ReactJS</h1>;
    }

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);

// Nota. O método querySelector é capaz de buscar referências na árvore DOM
// utilizando qualquer seletor CSS. O método getElementById, por sua vez, faz
// buscas utilizando somente o id de um elemento. Ambos resolvem o problema, neste
// caso.


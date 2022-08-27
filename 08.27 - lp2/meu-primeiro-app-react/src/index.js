import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  const estilosBotao = {
      marginTop: 12,
      paddingTop: 8,
      paddingBottom: 8,
      borderStyle: 'hidden',
      width: '100%',
      borderRadius: 8,
      outline: 'none',
      boxSizing: 'border-box',
      backgroundColor: '#000',
      color: '#fff',
    };

  const textoDoRotulo = "Nome";

  const obterTextoDoBotao = () => {
      return "Enviar";
    };

  return (
   <div style={{
    margin: 'auto',
    width: 768,
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)'

   }}>

    <label htmlFor='nome' style={{
      display: 'block',
      marginBottom: 4,
    }}>{textoDoRotulo}</label>

    <input id='nome' type='text' style={{
      paddingTop: 8,
      paddingBottom: 8,
      borderStyle: 'hidden',
      width: '100%',
      borderRadius: 8,
      outline: 'none',
      boxSizing: 'border-box',
      fontSize: 16,
      marginBottom: 12,
    }}></input>

    <button style={estilosBotao}>
      {obterTextoDoBotao()}
    </button>

   </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));

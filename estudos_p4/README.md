# Estudos P4

# React

## Apostila 7
Nota. Lembre-se que, até então, não estudamos sobre os Hooks do React, então, se precisarmos de componentes com estado, utilizaremos aqueles definidos por meio de classes.

https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/reactjs/reactjs-quiz.md


## Forms e entrada de dados pelo usuário

## Tratamento de eventos

## Acesso a APIs com requisições HTTP

## Exibição de coleções de dados

No React, quando trabalhamos com listas que serão iteradas de modo a criar um HTML (Accordion - apostila 8), por exemplo, precisamos de uma chave única para cada item da lista. Essa chave é utilizada pelo React para identificar cada item da lista e, assim, otimizar a renderização do HTML. Para isso, podemos utilizar o atributo `key` do componente React. Não é recomendado utilizar o índice do item da lista como chave, pois, caso a lista seja reordenada, o React não conseguirá identificar os itens da lista e, portanto, não conseguirá otimizar a renderização do HTML. Para evitar esse problema, podemos utilizar o id do item da lista como chave. Por exemplo:

```jsx
const lista = [
  { id: 1, nome: 'João' },
  { id: 2, nome: 'Maria' },
  { id: 3, nome: 'José' },
];

const Lista = () => (
  <ul>
    {lista.map((item) => (
      <li key={item.id}>{item.nome}</li>
    ))}
  </ul>
);
```

Pela documentação do React, "Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys. When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort. We don’t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state."

## Hooks
### useState

O que o useState faz? Ele declara um variável state. Nossa variável é chamada de count mas poderíamos chamar de qualquer coisa, como banana. Esta é uma maneira de “preservar” alguns valores entre as chamadas de funções — useState é uma nova maneira de usar as mesmas capacidades que o this.state tem em uma classe. Normalmente, variáveis “desaparecem” quando a função sai mas variáveis de state são preservadas pelo React.

O que passamos para o useState como argumento? O único argumento para o Hook useState() é o state inicial. Diferente de classes, o state não tem que ser um objeto. Podemos manter um número ou uma string se for tudo que precisamos. No nosso exemplo, apenas queremos um número para quantas vezes o usuário clicou, então passamos 0 como state inicial para nossa variável. (Se quiséssemos guardar dois valores diferentes no state, chamaríamos useState() duas vezes.)

O que useState retorna? Ele retorna um par de valores: o state atual e uma função que atualiza o state. É por isso que escrevemos const [count, setCount] = useState(). Isto é similar ao this.state.count e this.setState em uma classe, exceto o fato de pegá-los em par. Se você não está familiarizado com a sintaxe que usamos, vamos voltar nisso no final dessa página.


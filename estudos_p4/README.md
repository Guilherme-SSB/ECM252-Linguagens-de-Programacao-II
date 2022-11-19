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

## React Redux
Ele basicamente tira a responsabilidade de cada um dos componentes de armazenar os estados, deixando tudo isso centralizado, sendo utilizado ao mesmo tempo por todos os componentes de forma compartilhada. Ele também roda em diferentes ambientes como servidor, cliente e nativo.

Store é a single source of truth. Os estados são somente de leitura e só podem ser alterados através das Actions. As alterações são feitas através de funções puras. Para transformar um estado, através das Actions, é utilizado os Reducers, que são funções puras que pegam o estado anterior - a ação - e retornam um novo estado.

Fazendo o uso do Redux todos esses estados ficarão armazenados em uma árvore de objetos através do store. Para que isso aconteça, o Redux utiliza 3 recursos:

- Store: você pode pensar em store como um container ou um grande centro de informações, que tem disponibilidade para receber e entregar o que o seu componente requisita. A store armazena de forma centralizada todos os estados da aplicação. Vale ressaltar que a store é imutável

- Actions: São ações disparadas da aplicação para o store. Elas são criadas através das action creators. As actions são a única forma de acionar uma mudança de estados no store.

- Reducers: Cada dado da store deve ter o seu próprio reducer. Ele é encarregado de lidar com todas as ações e especificam como o estado da aplicação irá mudar de acordo com a action que foi enviada para o store.

O fluxo geralmente funciona da seguinte forma: um componente gera uma interação através de um clique dado pelo usuário na interface - por exemplo, assim, um action creator é acionado e dispara uma ação para o store. Essa ação chega até um reducer que irá processar e fazer a alteração do estado no store. Assim um novo estado será disponibilizado para o componente.

Também é importante saber que o Redux tem 3 princípios, sendo:

- Todos os estados estarão disponíveis exclusivamente através do store: todo o estado da sua aplicação vai estar armazenado nesse store que é único, onde todos os componentes vão consultar nesse store.

- Os estados são somente leitura: os componentes não podem fazer uma manipulação direta nas informações que estão nele.

- As alterações são feitas através de funções puras: o Redux utiliza o conceito de programação funcional, por isso toda alteração no store é feita através de uma função pura, chamada de reducer. O reducer recebe o estado e a ação, onde com essa ação nós visualizamos o que precisa ser alterado no estado e o reduce entrega uma nova store do nosso estado da aplicação.

Por ser uma biblioteca o Redux pode até ser utilizado sozinho, mas ele é normalmente implementado em um conjunto de outras libs ou frameworks JavaScript (Ember, Vue, Angular…). Mas o comum mesmo, que você até já deve ter visto, é vê-lo em funcionamento com o React. É muito comum ver projetos e exemplos de React com Redux juntos, mas é bom deixar claro que o Redux não depende do React.

### Defining mapStateToProps
mapStateToProps should be defined as a function:

```jsx
function mapStateToProps(state, ownProps?)
```

It should take a first argument called `state`, optionally a second argument called `ownProps`, and return a plain object containing the data that the connected component needs.
This function should be passed as the first argument to `connect`, and will be called every time when the Redux store state changes. If you do not wish to subscribe to the store, pass `null` or `undefined` to connect in place of `mapStateToProps`.

It does not matter if a mapStateToProps function is written using the function keyword  `(function mapState(state) { } )` or as an arrow function `(const mapState = (state) => { } )` - it will work the same either way.

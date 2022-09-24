
# Estudos para prova p3

## Apostila 03
Um componente ReactJS pode ser definido de duas formas diferentes: utilizando
uma função ou uma classe. Em ambos os casos, ele deve produzir código HTML que
explica como se dá a sua exibição. Além disso, ele pode definir funções
responsáveis pela manipulação de eventos gerados pelo usuário.

## React Hooks
React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects.

## React extends React.Component
React components are simply functions.

For example, you can render a functional react component without importing react, as long as you don't use JSX.

If you want to use JSX and write your HTML in your js file, then you need to import react.

If you want to write a component that takes advantage of the lifecycle methods you will need to extend the default Component class. The Component class contains the lifecycle methods and should not be confused with other generic react components, such as functional components or any component you may write. This Component refers to a specific class implementation maintained by react.

Extending Component will give you access to functions like componentDidMount, componentDidUpdate, componentWillUnmount and render.

## Props vs. State in React 



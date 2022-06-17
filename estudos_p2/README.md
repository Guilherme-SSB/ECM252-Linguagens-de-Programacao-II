# Anotações de Aula

## Aula 30/04/2022
 
Componentes em Angular é uma extensão da linguagem HTML. (Um compenente "vira" uma tag HTML).

Template é o próprio HTML - Apresentação gráfica do componente Angular.

### Data Binding
#### Interpolação
Notação: `{{}}` <br>
Usado para avaliar uma expressão, que pode ser uma variável ou método do componente, e exibi-la no HTML.

#### Propery Binding 
Notação: `[]` <br>
Usado pelo template (HTML) para ler uma expressão do componente e associar a uma propriedade de algum elemento que ele defina.

Eventualmente um elemento do HTML tem uma exibição condicional, atributo hidden que está relacionado a um atributo do componente Angular. Você vincula essa propriedade do componente angular com essa condição do HTML.

#### Event Binding
Notação: `()` <br>
Usado para especificação de eventos que podem acontecer no template e que interessam o componente. Ali especificamos um método a ser chamado quando o evento acontecer.

Você tem um botão HTML que quando clicado, dispara um evento do componente Angular. Você vincula o método do Componente com o botão HTML.

#### Two-way Data Binding
É uma mistura do Property Binding e Event Binding. Quando usamos esse mecanismo, a atualização ocorre em mão dupla: Um elemento visual do template fica associado a uma variável do componente. Caso o elemento seja atualizado, a variável também é. Caso a variável seja atualizada, o elemento também é. O operador `[()]` (caixa de banana) é usado para fazer o binding de forma bidirecional.


### Injeção de Dependência - Importante

### Mean
MongoDB

Express

Angular

NodeJS


import { createServer } from '@graphql-yoga/node'


const pessoas = [
    {
        id: '1',
        nome: 'Cormen',
        idade: 19
    },
    {
        id: '2',
        nome: 'Velleman',
        idade: 22
    }
]

const livros = [
    {
        id: '100',
        titulo: 'Introduction to Algorithms',
        edicao: 3,
        autor: '1'
    },
    {
        id: '101',
        titulo: 'How to Prove it',
        edicao: 2,
        autor: '2'
    }
]
   



const typeDefs = `
type Pessoa {
    id: ID!
    nome: String!
    idade: Int
    }

type Livro {
    id: ID!
    titulo: String!
    edicao: Int!
    autor: Pessoa!
    }

type Comentario {
    id: ID!
    texto: String!
    nota: Int!
    }

type Query {
    livros: [Livro!]!
}


`;


const resolvers = {
    Query: {
        livros() {
            return livros;
        }
    }
};

const server = createServer({
    schema: {
        typeDefs,
        resolvers
    }
})


server.start(() => {
    'Servidor no ar...'
})

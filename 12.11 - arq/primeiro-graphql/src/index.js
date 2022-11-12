import { createServer } from "@graphql-yoga/node"

const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis",
        genero: "Fantasia",
        edicao: 1,
        preco: 10.00
    },

    {
        id: 2,
        titulo: "Harry Potter",
        genero: "Fantasia",
        edicao: 1,
        preco: 20.00
    },

    {
        id: 3,
        titulo: "O Hobbit",
        genero: "Fantasia",
        edicao: 1,
        preco: 30.00
    },

    {
        id: 4,
        titulo: "O Código da Vinci",
        genero: "Ficção",
        edicao: 1,
        preco: 40.00
    },

    {
        id: 5,
        titulo: "O Silmarillion",
        genero: "Fantasia",
        edicao: 1,
        preco: 50.00
    }
]


const usuarios = [
    {
        id: 1,
        nome: "José",
        livros: [
            {
                id: 1,
                titulo: "O Senhor dos Anéis",
                genero: "Fantasia",
                edicao: 1,
                preco: 10.00
            },
        
            {
                id: 2,
                titulo: "Harry Potter",
                genero: "Fantasia",
                edicao: 1,
                preco: 20.00
            },
        
            {
                id: 3,
                titulo: "O Hobbit",
                genero: "Fantasia",
                edicao: 1,
                preco: 30.00
            }
        ]
    },

    {
        id: 2,
        nome: "Maria",
        livros: [
            {
                id: 4,
                titulo: "O Código da Vinci",
                genero: "Ficção",
                edicao: 1,
                preco: 40.00
            },
        
            {
                id: 5,
                titulo: "O Silmarillion",
                genero: "Fantasia",
                edicao: 1,
                preco: 50.00
            }
        ]
    }
]


const typeDefs = `
    type Query {
        livros (precoMaximo: Float!): [Livro!]!
        adicionar(numeros:[Float!]):Float!
        notas: [Int!]!
        bemVindo(nome: String): String!
        effectiveJava: Livro!
    },

    type Livro {
        id: ID!
        titulo: String!
        genero: String!
        edicao: Int
        preco: Float
    }
`;


const resolvers = {
    Query: {
        livros(parent, args, ctx, info) {
            return livros.filter((l) => {
                return l.preco <= args.precoMaximo
            })
        },

        adicionar(parent, args, ctx, info){
            return args.numeros.length === 0? 0 :
            args.numeros.reduce((ac,atual) => {
                return ac + atual;
            })
        },

        notas(parent, args, ctx, info) {
            return[10, 2, 7, 7, 8]
        },

        bemVindo(parent, args, ctx, info) {
            return `
                Bem vindo ${args.nome ? args.nome: 'visitante'}
                `;
        },

        effectiveJava() {
            return {
                id: '123456',
                titulo: 'Effective Java',
                genero: 'Técnico',
                edicao: 3,
                preco: 43.9
            }
        }
    },
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


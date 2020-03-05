const { gql } = require('apollo-server-express');

const typeDefs = gql`
	"Estação possui somente o nome do planeta. Utilizada para identificar os planetas que possuem estação"
	type Station {
		name: String
	}
	type Query {
		"Query para buscar todos planetas com massa maior que 25, buscando as 10 primeiras páginas da API da Arcsecond"
		suitablePlanets: [Planet]!
	}
	type Mutation {
		"Mutation utilizada para instalar uma estação em um planeta, recebe como parâmetro o nome do planeta. Armazena somente o nome do planeta que possui estação."
		installStation(name: String!): Station
	}

	"Planeta possui um nome, massa, e hasStation para indicar se o planeta possui estação"
	type Planet {
		name: String!
		mass: Float
		hasStation: Boolean!
	}
`;

module.exports = typeDefs;

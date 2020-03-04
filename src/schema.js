const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type Station {
		name: String
	}
	type Query {
		suitablePlanets: [Planet]!
	}
	type Mutation {
		installStation(name: String!): Station
	}

	type Planet {
		name: String!
		mass: Float
		hasStation: Boolean!
	}
`;

module.exports = typeDefs;

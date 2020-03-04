const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const PlanetAPI = require('./src/datasources/planet');
require('dotenv').config();
require('./src/database/config');

const resolvers = require('./src/resolvers');
const typeDefs = require('./src/schema');

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources: () => ({
		planetAPI: new PlanetAPI()
	})
});
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
	console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

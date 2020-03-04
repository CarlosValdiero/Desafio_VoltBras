const { Station } = require('./database/models');

module.exports = {
	Planet: {
		hasStation: async planet => {
			try {
				let response = await Station.findOne({ name: planet.name });

				return response ? true : false;
			} catch (e) {
				return e.message;
			}
		}
	},
	Query: {
		suitablePlanets: (_, __, { dataSources }) =>
			dataSources.planetAPI.getAllPlanets()
	},
	Mutation: {
		installStation: async (_, args) => {
			try {
				let response = await Station.create(args);
				return response;
			} catch (e) {
				console.log(e.message);
				return e.message;
			}
		}
	}
};

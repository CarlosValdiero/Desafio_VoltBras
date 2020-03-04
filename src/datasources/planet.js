const { RESTDataSource } = require('apollo-datasource-rest');
const { Station } = require('../database/models');

class PlanetAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://api.arcsecond.io';
	}

	async getAllPlanets() {
		const response = await this.get('/exoplanets/');

		if (Array.isArray(response.results)) {
			const planets = response.results.filter(planet => {
				return planet.mass !== null && planet.mass.value > 25.0;
			});

			return planets.map(planet => this.planetReducer(planet));
		}
		return [];
	}

	async isValidPlanet({ name }) {
		const response = await this.get('/exoplanets/', { name });

		if (Array.isArray(response.results)) {
			const planets = response.results.filter(planet => {
				return planet.mass !== null && planet.mass.value > 25.0;
			});

			return planets[0] ? true : false;
		}
		return false;
	}

	planetReducer(planet) {
		const hasStation = false;
		return {
			name: planet.name,
			mass: planet.mass.value,
			hasStation: hasStation
		};
	}
}

module.exports = PlanetAPI;

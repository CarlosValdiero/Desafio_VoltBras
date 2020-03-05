const { RESTDataSource } = require('apollo-datasource-rest');
const { Station } = require('../database/models');

class PlanetAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = '';
	}

	async getAllPlanets() {
		let count = 1;
		let url = 'https://api.arcsecond.io/exoplanets/';
		let listPlanets = [];
		do {
			const response = await this.get(url);

			if (Array.isArray(response.results)) {
				url = response.next;
				const planets = response.results.filter(planet => {
					return planet.mass !== null && planet.mass.value > 25.0;
				});
				listPlanets = listPlanets.concat(
					planets.map(planet => this.planetReducer(planet))
				);
			} else {
				return listPlanets;
			}

			count++;
		} while (count < 10 && url);

		return listPlanets;
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

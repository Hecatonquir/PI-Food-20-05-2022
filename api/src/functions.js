const axios = require('axios');
const Key = '';
const Key2 = '9b8dfb13647a40c3897f6baa2d6bd7bc';

/* Gets all pokemons from the API */
const getAllFood = async () => {
	const apiFood = await axios.get(
		'https://api.spoonacular.com/recipes/complexSearch?offset=0&number=100&apiKey=9b8dfb13647a40c3897f6baa2d6bd7bc&addRecipeInformation=true'
	);
	// esto me trae toda la info de la api, incluso info que no necesito

	const dataFood = await apiFood.data.results.map((e) => {
		if (e.analyzedInstructions[0]) {
			return {
				id: e.id,
				title: e.title,
				summary: e.summary,
				aggregateLikes: e.aggregateLikes,
				healthScore: e.healthScore,
				// ESTO ES UN ARRAY CON UN OBJETO DENTRO, CON UNA KEY QUE ES UN ARRAY DONDE CADA ELEMENTO ES UN OBJETO
				analyzedInstructions: e.analyzedInstructions[0].steps
					.map((e) => `  ${e.number}º step: ${e.step}`)
					.join('\n'),
				image: e.image,
			};
		} else {
			return {
				id: e.id,
				title: e.title,
				summary: e.summary,
				aggregateLikes: e.aggregateLikes,
				healthScore: e.healthScore,
				// ESTO ES UN ARRAY CON UN OBJETO DENTRO, CON UNA KEY QUE ES UN ARRAY DONDE CADA ELEMENTO ES UN OBJETO
				analyzedInstructions: `No hay pasos a seguir`,
				image: e.image,
			};
		}
	});
	// con apiFood.data me traigo toda la info que me interesa en forma de objeto, luego le pido que haga un .map dentro del key "results" (que es un array) y me traiga todas las recetas en forma de objeto.

	return dataFood;
};


const geType = async () => {
	const apiFood = await axios.get(
		`https://api.spoonacular.com/recipes/complexSearch?offset=0&number=100&apiKey=e669fb81351e46b9aa12e83d1cf4a095&addRecipeInformation=true`
	);

	const typeFood = await apiFood.data.results.map((e) => {
		return {
			id: e.id,
			diets: e.diets.join('\n '),
		};
	});
	return typeFood;
};
module.exports = { getAllFood, geType };

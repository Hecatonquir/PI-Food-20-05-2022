const axios = require('axios');
const { key } = process.env;
/* Gets all pokemons from the API */
const getAllFood = async () => {
	const apiFood = await axios.get(
		`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&addRecipeInformation=true`
	);
	// esto me trae toda la info de la api, incluso info que no necesito

	const dataFood = await apiFood.data.results.map((e) => {
		return {
			id: e.id,
			title: e.title,
			summary: e.summary,
			aggregateLikes: e.aggregateLikes,
			healthScore: e.healthScore,
			analyzedInstructions: e.analyzedInstructions,
			image: e.image,
		};
	});
	// con apiFood.data me traigo toda la info que me interesa en forma de objeto, luego le pido que haga un .map dentro del key "results" (que es un array) y me traiga todas las recetas en forma de objeto.

	return dataFood;
};

const getAllFoodDB = async () => {
	const apiFood = await axios.get(
		`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&addRecipeInformation=true`
	);
	console.log(apiFood);
	// esto me trae toda la info de la api, incluso info que no necesito

	const dataFood = await apiFood.data.results.map((e) => {
		return {
			id: e.id,
			title: e.title,
			summary: e.summary,
			aggregateLikes: e.aggregateLikes,
			healthScore: e.healthScore,
			analyzedInstructions: e.analyzedInstructions,
			image: e.image,
		};
	});
	// con apiFood.data me traigo toda la info que me interesa en forma de objeto, luego le pido que haga un .map dentro del key "results" (que es un array) y me traiga todas las recetas en forma de objeto.

	return dataFood;
};

let Quokka = getAllFoodDB();
console.log(Quokka);

module.exports = { dataFood };

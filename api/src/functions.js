const axios = require('axios');
const { Recipe, DietType } = require('./db');
const Key = '';
const Key2 = '9b8dfb13647a40c3897f6baa2d6bd7bc';

/* Gets all pokemons from the API */
const getFoodByName = async (req, res, next) => {
	let { name } = req.query;

	try {
		const apiFood = (
			await axios.get(
				'https://api.spoonacular.com/recipes/complexSearch?offset=0&number=100&apiKey=9b8dfb13647a40c3897f6baa2d6bd7bc&addRecipeInformation=true'
			)
		).data;

		const dataFood = await apiFood.results.map((e) => {
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

		const created_recipes = await Recipe.findAll();
		const allRecipes = created_recipes.concat(dataFood);
		let MatchingFood = allRecipes.filter((e) =>
			e.title.toUpperCase().includes(name.toUpperCase())
		);
		res.send(MatchingFood);
	} catch (error) {
		//next(error); Esto sería usar el error centralizado
		res.send('No se encontraron recetas con ese nombre.');
	}
};

const getFoodByID = async (req, res, next) => {
	let { idReceta } = req.params;

	if (idReceta.includes('-')) {
		const created_recipes = await Recipe.findAll();
		let found = created_recipes.find((e) => e.id == idReceta);
		return res.send(found);
	} else idReceta = parseInt(idReceta);
	var IdFood = {};

	try {
		const apiFood = (
			await axios.get(
				`https://api.spoonacular.com/recipes/${idReceta}/information?apiKey=9b8dfb13647a40c3897f6baa2d6bd7bc`
			)
		).data;

		if (apiFood.analyzedInstructions[0]) {
			IdFood = {
				id: apiFood.id,
				title: apiFood.title,
				summary: apiFood.summary,
				aggregateLikes: apiFood.aggregateLikes,
				healthScore: apiFood.healthScore,
				// ESTO ES UN ARRAY CON UN OBJETO DENTRO, CON UNA KEY QUE ES UN ARRAY DONDE CADA ELEMENTO ES UN OBJETO
				analyzedInstructions: apiFood.analyzedInstructions[0].steps
					.map((e) => `  ${apiFood.number}º step: ${apiFood.step}`)
					.join('\n'),
				diets: apiFood.diets.join('\n '),
				image: apiFood.image,
			};
		} else {
			IdFood = {
				id: apiFood.id,
				title: apiFood.title,
				summary: apiFood.summary,
				aggregateLikes: apiFood.aggregateLikes,
				healthScore: apiFood.healthScore,
				// ESTO ES UN ARRAY CON UN OBJETO DENTRO, CON UNA KEY QUE ES UN ARRAY DONDE CADA ELEMENTO ES UN OBJETO
				analyzedInstructions: `No hay pasos a seguir`,
				diets: apiFood.diets.join('\n '),
				image: apiFood.image,
			};
		}

		res.send(IdFood);
	} catch (error) {
		//next(error)
		res.send('No se encontraro una receta con ese ID.');
	}
};

/*  GET /types:
Obtener todos los tipos de dieta posibles
En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular acá */
const dietTypes = async function (req, res, next) {
	//const FoodTypes = await axios.get(`https://spoonacular.com/food-api/docs#Diets`);
	const types = await DietType.findAll();
	let FoodTypes;
	if (types.length >= 1) {
		return res.send(types[0].title);
	} else {
		let FoodTypes = [
			'Gluten Free',
			'Ketogenic',
			'Vegetarian',
			'Lacto-Vegetarian',
			'Ovo-Vegetarian',
			'Vegan',
			'Pescetarian',
			'Paleo',
			'Primal',
			'Low ODMAP',
			'Whole30',
		];
		res.send(FoodTypes.join(', - - - ,   '));
	}
};

const newRecipe = async function (req, res, next) {
	let { title, summary, aggregateLikes, healthScore, analyzedInstructions, diets, image } =
		req.body;

	try {
		await Recipe.create({
			title,
			summary,
			aggregateLikes,
			healthScore,
			analyzedInstructions,
			image,
		});
		let diet = await DietType.create({ title: diets });
		res.send('Se creó una nueva receta y se agregó su dieta correspondiente');
	} catch (error) {
		//next(error);
		res.send('No pusiste todos los datos para crear una receta nueva.');
	}
};

module.exports = { getFoodByName, getFoodByID, dietTypes, newRecipe };

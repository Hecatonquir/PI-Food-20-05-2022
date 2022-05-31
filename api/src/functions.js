const axios = require('axios');
const { Recipe, DietType } = require('./db.js');
const Key = '1a5c28a9acbc49dca45aadfd2bf8c60f';
/* 
Key = '';
Key = '925e0f5660864c49947e0de9e9add261';
Key = 'dff6bd8e57744085907adfbd67504b22';
Key = '81615974cf994ce9b0f2d9fea4616035';
Key = 'e38e3779809f4b03913a4172bfc2d236';
*/

// LLAMA LAS PRIMERAS 100 RECETAS DE LA API
const getApiRecipes = async () => {
	try {
		const apiFood = (
			await axios.get(
				`https://api.spoonacular.com/recipes/complexSearch?offset=1&number=1&apiKey=${Key}&addRecipeInformation=true`
			)
		).data.results;

		const dataFood = await apiFood.map((e) => {
			return {
				id: e.id,
				title: e.title,
				summary: e.summary,
				aggregateLikes: e.aggregateLikes,
				healthScore: e.healthScore,
				// ESTO ES UN ARRAY CON UN OBJETO DENTRO, CON UNA KEY QUE ES UN ARRAY DONDE CADA ELEMENTO ES UN OBJETO
				analyzedInstructions: e.analyzedInstructions[0]
					? e.analyzedInstructions[0].steps.map((e) => ` ${e.number}º step: ${e.step}  `)
					: 'No hay pasos a seguir',
				diets: e.diets.map((e) => e),
				image: e.image,
			};
		});

		return dataFood;
	} catch (error) {
		return error;
	}
};

const getDbRecipes = async () => {
	const created_recipes = await Recipe.findAll({
		include: {
			model: DietType,
			attributes: ['title'],
			through: { attributes: [] },
		},
	});
	return created_recipes;
};

const getAllRecipes = async () => {
	try {
		let apiRecipes = await getApiRecipes();
		let dbRecipes = await getDbRecipes();
		let allRecipes = await dbRecipes.concat(apiRecipes);
		return allRecipes;
	} catch (error) {
		return error;
	}
};

const getFoodByName = async (req, res, next) => {
	let { name } = req.query;
	let allRecipes = await getAllRecipes();
	try {
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
			await axios.get(`https://api.spoonacular.com/recipes/${idReceta}/information?apiKey=${Key}`)
		).data;

		IdFood = {
			id: apiFood.id,
			title: apiFood.title,
			summary: apiFood.summary,
			aggregateLikes: apiFood.aggregateLikes,
			healthScore: apiFood.healthScore,
			// ESTO ES UN ARRAY CON UN OBJETO DENTRO, CON UNA KEY QUE ES UN ARRAY DONDE CADA ELEMENTO ES UN OBJETO
			analyzedInstructions: apiFood.analyzedInstructions[0]
				? apiFood.analyzedInstructions[0].steps
						.map((e) => `  ${apiFood.number}º step: ${apiFood.step}`)
						.join('\n')
				: 'No se encontraron pasos a seguir',
			diets: apiFood.diets.join('\n '),
			image: apiFood.image,
		};

		res.send(IdFood);
	} catch (error) {
		//next(error)
		res.send('No se encontraro una receta con ese ID.');
	}
};

/*  GET /types:
Obtener todos los tipos de dieta posibles
En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular acá */

const newRecipe = async function (req, res, next) {
	try {
		let { title, summary, aggregateLikes, healthScore, analyzedInstructions, diets, image } =
			req.body;
		let createdRecipes = await Recipe.create({
			title,
			summary,
			aggregateLikes,
			healthScore,
			analyzedInstructions,
			image,
		});
		let createdDiet = await DietType.findAll({
			where: { title: diets.map((e) => e.toUpperCase()) },
		});
		createdRecipes.addDietType(createdDiet);
		res.send('createdRecipes');
	} catch (error) {
		//next(error);
		res.send('No pusiste todos los datos para crear una receta nueva.');
	}
};

const loadDietTypes = async function (req, res, next) {
	try {
		const apiTypes = await getApiRecipes();
		await apiTypes.map((obj) =>
			obj.diets.map((e) => DietType.findOrCreate({ where: { title: e.toUpperCase() } }))
		);
		const dbTypes = await DietType.findAll();
		return res.send(dbTypes.map((e) => e.title));
	} catch (error) {
		res.send('No hay datos guardados');
	}
};

const upDietTypes = async function (req, res, next) {
	let FoodTypes = [
		{ title: 'Gluten Free' },
		{ title: 'Ketogenic' },
		{ title: 'Vegetarian' },
		{ title: 'Lacto-Vegetarian' },
		{ title: 'Ovo-Vegetarian' },
		{ title: 'Vegan' },
		{ title: 'Pescetarian' },
		{ title: 'Paleo' },
		{ title: 'Primal' },
		{ title: 'Low ODMAP' },
		{ title: 'Whole30' },
	];
	try {
		FoodTypes.map((e) => DietType.findOrCreate({ where: { title: e.title.toUpperCase() } }));
		res.send('Tipos cargados a la DB');
	} catch (error) {
		return 'No se guardaron los Tipos en la DB';
	}
};

module.exports = {
	getFoodByName,
	getFoodByID,
	loadDietTypes,
	newRecipe,
	upDietTypes,
	getAllRecipes,
};

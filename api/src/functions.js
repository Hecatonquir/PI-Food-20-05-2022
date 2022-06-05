const axios = require('axios');
const { Recipe, DietType } = require('./db.js');

const Key = 'a38d408c9619418480e5cb2b59049d44';
/*  */
// LLAMA LAS PRIMERAS 100 RECETAS DE LA API
const getApiRecipes = async () => {
	try {
		const apiFood = (
			await axios.get(
				`https://api.spoonacular.com/recipes/complexSearch?offset=0&number=50&apiKey=${Key}&addRecipeInformation=true`
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
					? e.analyzedInstructions[0].steps.map((e) => ` ${e.number}º step: ${e.step}  `).join()
					: 'No hay pasos a seguir',
				diets: e.diets,
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
			e.title.toLowerCase().includes(name.toLowerCase())
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
		const created_recipes = await Recipe.findAll({
			include: [{ model: DietType }],
		});
		let found = created_recipes.find((e) => e.id == idReceta);
		return res.send(found);
	} else {
		try {
			const apiFood = (
				await axios.get(
					`https://api.spoonacular.com/recipes/${idReceta}/information?apiKey=${Key}`
				)
			).data;
			const apiFoodArray = Object.entries(apiFood);

			const idRecipe = apiFoodArray
				.map((e) => {
					if (e[0] == 'id') return { id: e[1] };
					else if (e[0] == 'title') return { title: e[1] };
					else if (e[0] == 'summary') return { summary: e[1] };
					else if (e[0] == 'aggregateLikes') return { aggregateLikes: e[1] };
					else if (e[0] == 'healthScore') return { healthScore: e[1] };
					else if (e[0] == 'analyzedInstructions') return { analyzedInstructions: e[1] };
					else if (e[0] == 'title') return { title: e[1] };
					else if (e[0] == 'diets') return { diets: e[1] };
					else if (e[0] == 'image') return { image: e[1] };
				})
				.filter((e) => e != null);

			return res.send(idRecipe);
		} catch (error) {
			return error;
		}
	}
};

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
			where: { title: diets.map((e) => e.toLowerCase()) },
		});
		createdRecipes.addDietType(createdDiet);
		res.send('Creaste una nueva receta');
	} catch (error) {
		//next(error);
		res.send('No pusiste todos los datos para crear una receta nueva.');
	}
};

const loadDietTypes = async function (req, res, next) {
	try {
		const apiRecipes = await getApiRecipes();
		const dietas = apiRecipes.map((e) => e.diets).flat(Infinity);
		/* este es un array con dietas repetidas */
		let uniqueArray = [...new Set(dietas)];
		/* este es un array con dietas UNICAS */
		/* console.log(uniqueArray); */

		uniqueArray.map((e) => {
			DietType.findOrCreate({ where: { title: e } });
		});
		const dietasCompletas = await DietType.findAll();
		res.send(dietasCompletas);
	} catch (error) {
		res.send('No hay datos guardados');
	}
};

const upDietTypes = async function (req, res, next) {
	let FoodTypes = [
		/* { title: 'Gluten Free' }, */
		/* { title: 'Lacto Ovo Vegetarian' }, */
		/* { title: 'Vegan' }, */
		/* { title: 'Dairy Free' }, */
		/* LAS PRIMERAS 4 NO LAS CARGO POR QUE CREO QUE ESO ES LO QUE ME PIDE EL README */
		{ title: 'Ketogenic' },
		{ title: 'Pescatarian' },
		{ title: 'Paleolithic' },
		{ title: 'Primal' },
		{ title: 'Fodmap Friendly' },
		{ title: 'Whole 30' },
	];
	try {
		FoodTypes.map((e) => DietType.findOrCreate({ where: { title: e.title.toLowerCase() } }));
		res.send('Tipos cargados a la DB');
	} catch (error) {
		return 'No se guardaron los Tipos en la DB';
	}
};

const deleteRecipe = async (req, res) => {
	let { idReceta } = req.params;
	await Recipe.destroy({
		where: { id: idReceta },
	});
	const newFood = await getDbRecipes();
	res.send(newFood);
};

module.exports = {
	deleteRecipe,
	getFoodByName,
	getFoodByID,
	loadDietTypes,
	newRecipe,
	upDietTypes,
	getAllRecipes,
	getDbRecipes,
};

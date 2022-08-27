const axios = require('axios');
const { Recipe, DietType } = require('./db.js');

const Key = 'e4712b8fa7034c41baa034b4b5a8b1b1';
/* 
Key = 01648a6df1a44520ba2c730c3d9d86e8
Key = 2bdb071e19ab4feca7fd48fb46b43ad0
Key = e4f9c20808184a2a9d132d3e99a215a9
Key = 8e1f1e1f68ef4972adf7e4cae1b94679
Key = de27fab1f133456ab6d7244641e248c2
Key = 18ecac27e38a44d7b743caec3d127396
Key = b75a93cddbcf4489b619d5200ff4ccb5
Key = 3b3b33f541aa4e12bf95b321729838f1
Key = 135b36e964174efcbcb2e0940e9289d0
Key = 246259cb904445e2b62c129ee5593920
Key = 49ceb22f73024b688594f94856e55462
Key = 348145973d5a4cc4a8ab4b7997b107e1
Key = b2bf140a182344608dd2b107d338bfb3
Key = 146510bab96446eaab809387f32e9076
*/
// LLAMA LAS PRIMERAS 100 RECETAS DE LA API
const getApiRecipes = () => {
	try {
		return axios
			.get(
				`https://api.spoonacular.com/recipes/complexSearch?offset=0&number=30&apiKey=${Key}&addRecipeInformation=true`
			)
			.then(async (res) => {
				const apiRecipes = res.data.results.map((e) => {
					return {
						title: e.title,
						summary: e.summary,
						healthScore: e.healthScore,
						analyzedInstructions: e.analyzedInstructions[0]
							? e.analyzedInstructions[0].steps.map((e) => ` ${e.number}º step: ${e.step}  `).join()
							: 'No hay pasos a seguir',
						image: e.image,
						dishTypes: e.dishTypes.join(', '),
						idAPI: e.id,
						aggregateLikes: e.aggregateLikes,
						dietsAPI: e.diets,
						cuisines: e.cuisines,
					};
				});

				//console.log('🟢 apiRecipes:', apiRecipes[0]);
				await apiRecipes.map(async (recipe) => {
					await Recipe.findOrCreate({
						where: recipe,
					});
				});

				console.log('🟢🟢🟢 Cargaste las recetas de la API');
				return true;
			});
	} catch (error) {
		console.log('💥💥💥 / file: functions.js / line 58 / getApiRecipes / error', error.message);

		return error.message;
	}
};

const upDietTypes = async function (req, res, next) {
	let FoodTypes = [
		{ title: 'Gluten Free' },
		{ title: 'Lacto Ovo Vegetarian' },
		{ title: 'Vegan' },
		{ title: 'Dairy Free' },
		/*LAS PRIMERAS 4 NO LAS CARGO POR QUE CREO QUE ESO ES LO QUE ME PIDE EL README */
		{ title: 'Ketogenic' },
		{ title: 'Pescatarian' },
		{ title: 'Paleolithic' },
		{ title: 'Primal' },
		{ title: 'Fodmap Friendly' },
		{ title: 'Whole 30' },
	];
	try {
		FoodTypes.map((e) => DietType.findOrCreate({ where: { title: e.title.toLowerCase() } }));
		console.log('🟢 Tipos de dietas cargados a la DB');
		return;
	} catch (error) {
		console.log('No se guardaron los Tipos de dietas en la DB');
		console.log('💥💥💥 / file: functions.js / line 58 / getApiRecipes / error', error.message);
		return;
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

const getAllRecipes = async (req, res) => {
	try {
		//let apiRecipes = await getApiRecipes();
		let dbRecipes = await getDbRecipes();
		//console.log('🟢🟢🟢 / file: functions.js / line 70 / getAllRecipes / dbRecipes', dbRecipes);
		//let allRecipes = await dbRecipes.concat(apiRecipes);
		console.log('🟢🟢🟢  ALLrecipes loaded correctly from DB');
		res.send(dbRecipes);
	} catch (error) {
		console.log('💥💥💥 error', error.message);
		res.send(error.message);
	}
};

const getFoodByName = async (req, res, next) => {
	let { name } = req.query;
	let allRecipes = await getDbRecipes();
	try {
		let MatchingFood = allRecipes.filter((e) => e.title.toLowerCase().includes(name.toLowerCase()));
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
				await axios.get(`https://api.spoonacular.com/recipes/${idReceta}/information?apiKey=${Key}`)
			).data;
			const apiFoodArray = Object.entries(apiFood);

			const idRecipe = apiFoodArray
				.map((e) => {
					if (e[0] == 'id') return { id: e[1] };
					else if (e[0] == 'title') return { title: e[1] };
					else if (e[0] == 'summary') return { summary: e[1] };
					else if (e[0] == 'dishTypes') return { dishTypes: e[1] };
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
		let { title, summary, dishTypes, healthScore, analyzedInstructions, diets, image } = req.body;
		dishTypes = dishTypes.join(', ');

		let createdRecipes = await Recipe.create({
			title,
			summary,
			dishTypes,
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
		const Recipes = await getDbRecipes();
		const dietas = Recipes.map((e) => e.dietsAPI).flat(Infinity);
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
		const dietasDB = await DietType.findAll();
		res.send(dietasDB);
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
	getApiRecipes,
};

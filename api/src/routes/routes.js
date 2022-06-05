const express = require('express');
const routes = express.Router();
const {
	getFoodByName,
	getFoodByID,
	loadDietTypes,
	newRecipe,
	getAllRecipes,
	getDbRecipes,
	deleteRecipe,
} = require('../functions');

routes.use(express.json());

routes.get('/recipes', getFoodByName);
routes.get('/recipes/:idReceta', getFoodByID);
routes.get('/types', loadDietTypes);
routes.post('/recipe', newRecipe);

routes.get('/allrecipes', async (req, res, next) => {
	let allRecipes = await getAllRecipes();
	res.send(allRecipes);
});
routes.get('/dbrecipes', async (req, res) => {
	let dbRecipes = await getDbRecipes();
	res.send(dbRecipes);
});

routes.delete('/recipes/:idReceta', deleteRecipe);

module.exports = routes;

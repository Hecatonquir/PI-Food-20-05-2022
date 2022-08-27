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

routes.get('/allrecipes', getAllRecipes);

routes.delete('/recipes/:idReceta', deleteRecipe);

module.exports = routes;

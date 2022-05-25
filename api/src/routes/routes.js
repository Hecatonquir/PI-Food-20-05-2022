const express = require('express');
const routes = express.Router();
const {
	getFoodByName,
	getFoodByID,
	loadDietTypes,
	newRecipe,
	getAllRecipes,

} = require('../functions');

routes.use(express.json());

routes.get('/recipes', getFoodByName);
routes.get('/recipes/:idReceta', getFoodByID);
routes.get('/types', loadDietTypes);
routes.post('/recipe', newRecipe);

routes.get('/allrecipes', getAllRecipes);


module.exports = routes;

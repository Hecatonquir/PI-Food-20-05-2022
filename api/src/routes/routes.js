const express = require('express');
const routes = express.Router();
const { getFoodByName, getFoodByID, dietTypes, newRecipe} = require('../functions');



routes.use(express.json());

routes.get('/recipes', getFoodByName);
routes.get('/recipes/:idReceta', getFoodByID);
routes.get('/types', dietTypes);
routes.post('/recipe', newRecipe)


module.exports = routes;

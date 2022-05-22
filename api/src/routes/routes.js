const express = require('express');
const routes = express.Router();
const { getAllFood } = require('../functions');

const { Recipe, DietType } = require('../db.js');

routes.use(express.json());

routes.get('/recipes', async (req, res) => {
	let { name } = req.query;
	const allFood = await getAllFood(); // esto es un arreglo de objetos

	try {
		let found = allFood.filter((e) => e.title.toUpperCase().includes(name.toUpperCase()));
		res.send(found);
	} catch (error) {
		res.send('No se encontraron recetas con ese nombre.');
	}
});

/* GET /recipes/{idReceta}:
Obtener el detalle de una receta en particular
Debe traer solo los datos pedidos en la ruta de detalle de receta
Incluir los tipos de dieta asociados */

routes.get('/recipes/{idReceta}:', async (req, res) => {
	let { name } = req.query;
	const allFood = await getAllFood(); // esto es un arreglo de objetos

	try {
		let found = allFood.filter((e) => e.title.toUpperCase().includes(name.toUpperCase()));
		res.send(found);
	} catch (error) {
		res.send('No se encontraron recetas con ese nombre.');
	}
});

module.exports = routes;

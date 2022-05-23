const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define('recipe', {
		id: {
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
		},
		title: {
			type: DataTypes.STRING,
		},
		summary: {
			type: DataTypes.TEXT,
		},
		aggregateLikes: {
			type: DataTypes.INTEGER,
		},
		healthScore: {
			type: DataTypes.INTEGER,
		},
		analyzedInstructions: {
			type: DataTypes.ARRAY(DataTypes.STRING),
		},
		image: {
			type: DataTypes.STRING,
		},
	});
};

const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'recipe',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
				allownull: false,
			},
			title: {
				type: DataTypes.STRING,
				allownull: false,
			},
			summary: {
				type: DataTypes.TEXT,
				allownull: false,
			},
			aggregateLikes: {
				type: DataTypes.INTEGER,
				allownull: true,
			},
			healthScore: {
				type: DataTypes.INTEGER,
				allownull: true,
			},
			analyzedInstructions: {
				type: DataTypes.TEXT,
				allownull: true,
			},
			image: {
				type: DataTypes.STRING,
				allownull: true,
			},
		},
		{ timestamps: false }
	);
};

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
			},
			summary: {
				type: DataTypes.TEXT,
			},
			analyzedInstructions: {
				type: DataTypes.TEXT,
			},
			image: {
				type: DataTypes.TEXT,
			},
			dishTypes: {
				type: DataTypes.STRING,
			},
			healthScore: {
				type: DataTypes.INTEGER,
			},
			idAPI: {
				type: DataTypes.INTEGER,
			},
			aggregateLikes: {
				type: DataTypes.INTEGER,
			},
			dietsAPI: {
				type: DataTypes.ARRAY(DataTypes.STRING),
			},
			cuisines: {
				type: DataTypes.ARRAY(DataTypes.STRING),
			},
		},
		{ timestamps: false }
	);
};

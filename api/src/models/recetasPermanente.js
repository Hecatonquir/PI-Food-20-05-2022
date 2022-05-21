const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define('permanentRecipe', {
		id: {
			primaryKey: true,
			allowNull: false,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		summary: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		aggregateLikes: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		healthScore: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		analyzedInstructions: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		image: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});
};

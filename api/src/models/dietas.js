const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'dietType',
		{
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
		},
		{ timestamps: false }
	);
};

const { db, DataTypes } = require('../utils/database.util');

// Create our first model (table)
const Register = db.define('registrations', {
	id: {
		primaryKey: true,
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
	},
	entranceTime: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	exitTime: {
		type: DataTypes.DATE,
		allowNull: true,
	},
	status: {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: 'working',
	},
});

module.exports = { Register };
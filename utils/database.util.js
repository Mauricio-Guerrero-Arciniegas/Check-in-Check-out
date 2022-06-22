const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize({
	dialect: 'postgres',
	host: 'localhost',
	username: 'postgres',
	password: 'mauro3008188070',
	port: 5432,
	database: 'registers',
	logging: false,
});

module.exports = { db, DataTypes };
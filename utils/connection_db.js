const config = require('../config/db_config');

const mssql = require('mssql');

const connectionPool = new mssql.ConnectionPool(config.mssql).connect()
	.then(pool => {
		console.log("Connected to DB")
		return pool;
	})
	// catch connetion error
	.catch(err => {
		console.log(err);
	})

module.exports = connectionPool


const config = require('../config/db_config');

const mssql = require('mssql');

const connectionPool = new mssql.ConnectionPool(config.mssql).connect()
	.then(pool => {
		console.log("Connected to DB")
		return pool;
	})
	.catch ( err => {
		console.log("Database Connection Error!", err);
	})

module.exports = connectionPool


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


const DBHandler = (paramList, query) => {
	connectionPool.then(pool => {
		const result = pool.request()

		paramList ? paramList.forEach(obj => {
			result.input(obj.key, obj.type, obj.value)
		}) : null
		result.query(query)
		return result
	})
}

module.exports = connectionPool
// module.exports = {
// 	connectionPool,
// 	DBHandler
// }

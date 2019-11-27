require('dotenv').config()

module.exports = {
	mssql: {
		server: process.env.DB_SERVER,
		user: process.env.DB_USER,
		password: process.env.DB_PW,
		database: process.env.DB_DATABASE
	}
}
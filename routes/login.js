const login = require('express').Router();
const DBHandler = require('../utils/connection_db').DBHandler


login.get('/', (req, res) => {
	const result = DBHandler()
	res.send(result)
})

module.exports = login
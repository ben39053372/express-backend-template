const jwt = require('jsonwebtoken');
const getToken = require('express').Router();
const DB = require('../utils/connection_db');
const loginSql = require("../sql/Login/login")

const payload = {
	data: 'physicalv4bapi',
}

// getToken
getToken.post('/', async (req, res, next) => {
	const username = req.body.username;
	const password = req.body.password;
	let result = await DB.then(pool => {
		let query = loginSql(username, password)
		return pool.query(query)
	})
		.catch(err => next(err))
	if (result.recordset.length === 1) {
		payload.username = result.recordset[0].username
		payload.centerid = result.recordset[0].centerid

		const token = jwt.sign(payload, 'secretPhysical')
		res.status(200).json({
			code: 20000,
			token,
			username: result.recordset[0].username,
			center: result.recordset[0].centerid,
			accessgroupid: result.recordset[0].accessgroupid,
		})
	} else {
		res.status(200).json({
			code: 20001,
			message: 'Username or Password Error!'
		})
	}

})

module.exports = getToken;

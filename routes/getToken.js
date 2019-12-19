const jwt = require('jsonwebtoken');
const getToken = require('express').Router();

const payload = {
	data: 'physicalv4bapi'
}

// getToken
getToken.get('/', (req, res) => {
	const token = jwt.sign(payload, 'secretPhysical', { expiresIn: '1h' })
	res.status(200).json({
		code: 20000,
		data: token
	})
})

module.exports = getToken;

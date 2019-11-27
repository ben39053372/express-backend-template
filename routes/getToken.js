const jwt = require('jsonwebtoken');
const getToken = require('express').Router();

const payload = {
	data: 'physicalv4bapi'
}

getToken.get('/', (req, res) => {
	const token = jwt.sign(payload, 'secretPhysical', { expiresIn: '1h' })
	res.json({status: 'ok', data: { token }})
})

module.exports = getToken;

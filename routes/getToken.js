const jwt = require('jsonwebtoken');
const getToken = require('express').Router();

const patload = {

}

getToken.get('/', (req, res) => {
	const token = jwt.sign({data: 'physicalv4bapi'}, 'secretPhysical', { expiresIn: '1h' })
	res.json({status: 'ok', data: { token }})
})

module.exports = getToken;

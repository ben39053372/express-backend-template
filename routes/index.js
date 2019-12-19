const index = require('express').Router();

// /
index.get('/', (req, res) => {
	res.status(200).json({
		status: 200,
		data: 'index'
	})
})

module.exports = index;

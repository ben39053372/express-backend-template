const prefix = require('express').Router()

// print called path
prefix.use((req, res, next) => {
	console.log('----------------------------------------------------------------------')
	console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
	next();
})

// print called date time
prefix.use((req, res, next) => {
	console.log('Time:', (new Date).toString());
	next();
})

module.exports = prefix;

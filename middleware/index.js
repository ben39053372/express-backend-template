const expressJwt = require('express-jwt');
const middleware = require('express').Router();
// import middleware
const prefix = require('./prefix');
const tokenHandler = require('./tokenHandler');

// some middleware here
middleware.use(prefix);
middleware.use(tokenHandler);

module.exports = middleware;

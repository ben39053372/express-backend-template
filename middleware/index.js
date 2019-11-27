const expressJwt = require('express-jwt');
const middleware = require('express').Router();
const prefix = require('./prefix');
const tokenHandler = require('./tokenHandler');

middleware.use(prefix);
middleware.use(tokenHandler);

module.exports = middleware;

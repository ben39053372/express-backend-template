var wechat = require('express').Router();
var checkSignature = require('../utils/checkSignature')
require('dotenv').config()

// wechat root route
wechat.get('/', (req, res, next) => {
  const body = req.query
  var result = checkSignature(process.env.TOKEN, body.signature, body.timestamp, body.nonce)
  if (result) res.send(req.query.echostr);
  else res.send('error');
  next();
})

module.exports = wechat;

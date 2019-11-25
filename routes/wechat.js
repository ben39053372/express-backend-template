var wechat = require('express').Router();

// wechat root route
wechat.get('/', (req, res, next)=>{
  res.send('Hello Wechat');
})

module.exports = wechat;

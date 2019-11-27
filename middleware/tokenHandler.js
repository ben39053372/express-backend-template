const tokenHandler = require('express').Router();
const expressJwt = require('express-jwt');

// get Token.payload into req.user 
tokenHandler.use(expressJwt({
  secret: 'secretPhysical',
  getToken: req => {
    if(req.headers.authorization) {
      console.log('token',req.headers.authorization)
      return req.headers.authorization
    } else return null
  }
}).unless({
  path: ['/getToken','/']
}))

// catch error if no token
tokenHandler.use((err, req, res, next) => {
  console.log(err.inner.message)
  if(err.name === 'UnauthorizedError') {
    res.status(200).json({
      status: err.status,
      data: err.inner
    })
  }
})

module.exports = tokenHandler;

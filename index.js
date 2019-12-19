const express = require('express');
const app = express();
// request middleware
const middleware = require('./middleware/index');

// require router
const index = require('./routes/index');
const v4bsh_api = require('./routes/v4bsh_api/v4bsh_api');
const getToken = require('./routes/getToken')

// express middleware
app.use(express.json())

// set header
app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With,x-token");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", 'Ben39053372')
  next();
})

// middleware
app.use(middleware);

// router
app.use(index);
app.use('/v4bsh_api',v4bsh_api);
app.use('/get_token', getToken);

// listening port
const port = 8080
// server start()
app.listen(port, () => {
  console.log(`Services listening on Port : ${port}`)
})
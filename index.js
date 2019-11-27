var express = require('express');
var app = express();
// express middleware
app.use(express.json())

var time = ''

// listening port
const port = 8080

// require router
var wechat = require('./routes/wechat');
var v4bApi = require('./routes/v4bApi');

// require modules
var db = require('./utils/connection_db')

// show called time
app.use((req, res, next)=>{
  console.log('Time:', (new Date).toString());
  next();
})

// show called path
app.use((req, res, next) => {
  console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
  next();
})

app.get('/',(req, res) => {
  res.send('index');
})

app.use('/v4bApi', v4bApi);

app.use('/wechat',wechat);

// server start()
app.listen(port, () => {
  console.log(`Services listening on Port : ${port}`)
})
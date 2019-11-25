var express = require('express');
var app = express();
// express middleware
app.use(express.json())

// listening port
const port = 80

// require router
var wechat = require('./routes/wechat');

// customer middleware

// show called time
app.use((req, res, next)=>{
  console.log('Time:', (new Date).toString());
  next();
})

// show called path
app.use((req, res, next)=>{
  console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
  next();
})

// ==> end of customer middleware

// customer route
app.get('/',(req, res)=> {
  res.send('index');
})

app.use('/wechat',wechat)
// ==> end of customer route

// server start()
app.listen(port, () => {
  console.log(`Services listening on Port : ${port}`)
})
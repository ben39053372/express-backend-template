const v4bApi = require('express').Router();
const db = require('../utils/connection_db')

v4bApi.use((req, res, next) => {
  console.log('user:', req.user);
  next();
})

v4bApi.get('/', (req, res) => {
  res.send('v4bApi');
})

// path: /v4bApi/getMemberList
v4bApi.get('/getMemberList', (req, res) => {
  db.then(pool => {
    return pool.query`SELECT top 1000 name, tel1 FROM MEM_MEMBER`
  }).then(result => {
    console.dir(`rowsAffected: ${result.rowsAffected}`)
    res.send(result.recordsets[0])
  }).catch(err => {
    console.log("connection error: ", err)
  })
})

module.exports = v4bApi
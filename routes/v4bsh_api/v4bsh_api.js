const v4bsh_api = require('express').Router();

const eqsp = require('./eqsp/index')

v4bsh_api.get('/', (req, res) => {
  res.send('v4bApi');
})

v4bsh_api.use('/eqsp',eqsp);

v4bsh_api.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    status: 500,
    error: "v4bsh_api error!call IT admin"
  })
  next();
})


// // path: /v4bApi/getMemberList
// v4bApi.get('/getMemberList', (req, res) => {
//   db.then(pool => {
//     return pool.query`SELECT top 1000 name, tel1 FROM MEM_MEMBER`
//   }).then(result => {
//     console.dir(`rowsAffected: ${result.rowsAffected}`)
//     res.send(result.recordsets[0])
//   }).catch(err => {
//     console.log("connection error: ", err)
//   })
// })

module.exports = v4bsh_api
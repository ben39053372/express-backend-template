const eqsp = require('express').Router();
const db = require('../../../utils/connection_db')

const getEqQtyByCenter = require('../../../sql/eqsp/getEqQtyBycenter');
const getSpQtyByCenter = require('../../../sql/eqsp/getSpQtyBycenter');
const getCenterList = require('../../../sql/eqsp/getCenterList');

// /v4bsh_api/eqsp/getEqQtyByCenter
eqsp.get('/getEqQtyByCenter', async (req, res, next) => {
  let result = await db.then(pool => {
    let query = getEqQtyByCenter(req.query.center);
    return pool.query(query)
  })
  .catch(err => next(err));
  res.status(200).json({
    code: 20000,
    data: result.recordset
  })
})

// /v4bsh_api/eqsp/getSpQtyByCenter
eqsp.get('/getSpQtyByCenter', async (req, res, next) => {
  let result = await db.then(pool => {
    let query = getSpQtyByCenter(req.query.center);
    return pool.query(query)
  })
  .catch(err => next(err));
  res.status(200).json({
    code: 20000,
    data: result.recordset
  })
})

eqsp.get('/getCenterList', async (req, res, next) => {
	let result = await db.then(pool => {
		let query = getCenterList();
		return pool.query(query)
	})
	.catch(err => next(err));
	res.status(200).json({
		code: 20000,
		data: result.recordset
	})
})

module.exports = eqsp;

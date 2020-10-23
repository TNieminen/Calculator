
const express = require('express')
const response = require('../../../utils/response')
const v1Controller = require('../../../controllers/calculus/v1')
const { validateGetCalculusByQuery } = require('./validator')
const { checkValidationResult } = require('../../../utils/validator')

const router = express.Router()


/* GET home page. */
router.get('/', validateGetCalculusByQuery, checkValidationResult, (req, res) => {
  res.status(200).send(response.success(v1Controller.getCalculusQuery(req.query.query)))
})

module.exports = router

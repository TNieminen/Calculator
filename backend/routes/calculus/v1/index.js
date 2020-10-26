
const express = require('express')
const response = require('../../../utils/response')
const v1Controller = require('../../../controllers/calculus/v1')
const { validateGetCalculusByQuery } = require('./validator')
const { checkValidationResult } = require('../../../utils/validator')

const router = express.Router()


/**
 * GET /calculus.
 *
 * @description Get calculation result by query.
 * @param {Request} req
 * @param {Response} res
 * @swagger
 * /calculus:
 *    get:
 *      summary: Get calculation result by query.
 *      tags:
 *        - Calculus
 *      parameters:
 *        - $ref: '#/components/parameters/calculationParam'
 *      responses:
 *        200:
 *          $ref: '#/components/responses/successResponse'
 *        400:
 *          $ref: '#/components/responses/errorResponse'
 *        500:
 *          $ref: '#/components/responses/errorResponse'
 */
router.get('/', validateGetCalculusByQuery, checkValidationResult, (req, res) => {
  res.status(200).send(response.success(v1Controller.getCalculusQuery(req.query.query)))
})

module.exports = router

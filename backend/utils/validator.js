const { validationResult } = require('express-validator')

/**
 * Check Validation Result.
 *
 * @description checks request for express validation errors
 * and if there are validation errors, it will throw the first
 * Error message
 * @param {Request} req
 * @param {Response} res
 * @param {next} next
 * @throws Validation Error Message
 */
exports.checkValidationResult = (req, res, next = () => {}) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    const error = new Error(errors.array()[0].msg)
    error.status = 400
    return next(error)
  }
  return next()
}

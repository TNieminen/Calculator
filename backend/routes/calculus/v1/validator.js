const { query } = require('express-validator')

exports.validateGetCalculusByQuery = [
  query('query', 'query should be a base64 string.')
  .notEmpty()
  .isString()
  .isBase64()
]

const { create, all } = require('mathjs')
const { decodeFromBase64 } = require('../../../utils/conversions')

const math = create(all)
const { evaluate } = math
/**
 * @see https://mathjs.org/docs/expressions/security.html
 */
math.import({
  'import': () => { throw new Error('Function import is disabled') },
  'createUnit': () => { throw new Error('Function createUnit is disabled') },
  'evaluate':   () => { throw new Error('Function evaluate is disabled') },
  'parse':      () => { throw new Error('Function parse is disabled') },
  'simplify':   () => { throw new Error('Function simplify is disabled') },
  'derivative': () => { throw new Error('Function derivative is disabled') }
}, { override: true })

module.exports.getCalculusQuery = (query) => {
  const text = decodeFromBase64(query)
  return evaluate(text)
}
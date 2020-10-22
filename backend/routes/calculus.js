const { create, all } = require('mathjs')

const express = require('express')

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

const router = express.Router()

// 2 * (23/(3*3))- 23 * (2*3)

/* GET home page. */
router.get('/', (req, res) => {
  console.log('query', req.query.query)
  const buff = Buffer.from(req.query.query, 'base64')  
  const text = buff.toString('utf-8')
  // remove 
  // filter option
  // const toEval = text.replace(/[^-()\d/*+.]/g, ''

  const test = evaluate(text)
  // console.log(text)
  console.log(test)
  res.sendStatus(200)
})

// eval
// https://stackoverflow.com/questions/6479236/calculate-string-value-in-javascript-not-using-eval
// calc
// https://medium.com/@stoopidguy1992/how-to-write-a-math-expression-parser-in-javascript-b5147bc9466b

router.post('/', (req, res) => {
  // console.log(req.query)
  console.log('BODY!', req.body)
  res.sendStatus(200)
})

// evil route, try with IIFE
// maybe we could even run a process and delete a file?
// req.query = (function(){console.log(true)})() 
// /* GET home page. */
// router.get('/', (req, res) => {
//   console.log('query', req.query.query)
//   const buff = Buffer.from(req.query.query, 'base64')  
//   const text = buff.toString('utf-8')
//   const test = eval(text)
//   // console.log(text)
//   console.log(test)
//   res.sendStatus(200)
// })


module.exports = router

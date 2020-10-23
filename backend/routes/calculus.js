const { create, all } = require('mathjs')
const express = require('express')
const response = require('../utils/response')

const { math } = create(all)
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


/* GET home page. */
router.get('/', (req, res) => {
  try{
    const buff = Buffer.from(req.query.query, 'base64')  
    const text = buff.toString('utf-8')
    const result = evaluate(text)
    res.status(200).send(response.success(result))
  }
  catch(err){
    res.status(400).send(response.error(err))
  }
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

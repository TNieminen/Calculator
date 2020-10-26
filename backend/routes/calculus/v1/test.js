const request = require('supertest')
const expect = require('expect')
const app = require("../../..")
const { encodeToBase64 } = require('../../../utils/conversions')


const agent = request.agent(app)


describe('===== V1 : Calculus API Route =====', () => {
  it('Should calculate sum correctly', async() => {
    const sum = '2+2'
    const res = await agent.get(`/calculus?query=${encodeToBase64(sum)}`)
      .expect(200)
    expect(res.body.result).toEqual(4)
    expect(res.body.error).toEqual(false)
  })
  it('Should calculate subtraction correctly', async() => {
    const sum = '2-2'
    const res = await agent.get(`/calculus?query=${encodeToBase64(sum)}`)
      .expect(200)
    expect(res.body.result).toEqual(0)
    expect(res.body.error).toEqual(false)
  })
  it('Should calculate multiplication correctly', async() => {
    const sum = '2*2'
    const res = await agent.get(`/calculus?query=${encodeToBase64(sum)}`)
      .expect(200)
    expect(res.body.result).toEqual(4)
    expect(res.body.error).toEqual(false)
  })
  it('Should calculate division correctly', async() => {
    const sum = '2/2'
    const res = await agent.get(`/calculus?query=${encodeToBase64(sum)}`)
      .expect(200)
    expect(res.body.result).toEqual(1)
    expect(res.body.error).toEqual(false)
  })
  it('Should understand closures correctly', async() => {
    const sum = '4/(2+2)'
    const res = await agent.get(`/calculus?query=${encodeToBase64(sum)}`)
      .expect(200)
    expect(res.body.result).toEqual(1)
    expect(res.body.error).toEqual(false)
  })
  it('Should work with mixed methods', async() => {
    const sum = '60 * (10/(2*5)) - 10 * (2*3)'
    const res = await agent.get(`/calculus?query=${encodeToBase64(sum)}`)
      .expect(200)
    expect(res.body.result).toEqual(0)
    expect(res.body.error).toEqual(false)
  })
  it('Should fail with empty query', async() => {
    const res = await agent.get(`/calculus`)
    expect(res.body.error).toEqual(true)
    expect(res.body.message).toBeDefined()
  })
  it('Should fail with a non base64 query', async() => {
    const res = await agent.get(`/calculus?query=2+2`)
    expect(res.body.error).toEqual(true)
    expect(res.body.message).toBeDefined()
  })
})

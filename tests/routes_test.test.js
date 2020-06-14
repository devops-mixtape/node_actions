const request = require('supertest')
const app = require('../server')

describe('Route route', () => {
  it('returns with a 200 status', async () => {
    const res = await request(app).get('/')

    expect(res.statusCode).toEqual(200)
  })
})

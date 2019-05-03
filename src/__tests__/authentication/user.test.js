const request = require('supertest')

const server = require('../../server')
const { User } = require('../../app/models/User')

describe('User', () => {
  test('should create user', async () => {
    const user = await User.store({
      name: 'Marcelo',
      email: 'marcelo@vuttr.com',
      password: 'MyPass2019!'
    })

    const response = await request(server)
      .post('/user')
      .send({
        name: user.name,
        email: user.email,
        password: user.password
      })

    expect(response.status).toBe(200)
  })
})

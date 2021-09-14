import request from 'supertest';
import { app } from '../../app';

it('fails when an unknown email is provided', async () => {
  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(400);
});

it('fails when an invalid password is provided', async () => {
  // create an account first
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);

  // then sign in with wrong password
  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'qwerty',
    })
    .expect(400);
});

it('responds with a cookie when all details are valid', async () => {
  // create an account first
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);

  // then sign in with wrong password
  const response = await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(200);

  // check for cookie
  expect(response.get('Set-Cookie')).toBeDefined();
});

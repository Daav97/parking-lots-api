import request from 'supertest';
import app from '../../app.js';
import { verifyToken } from '../../libs/jsonwebtoken.js';

describe('/api/auth Endpoints', () => {
  describe('/api/auth/login', () => {
    test('Should return a valid login token', async () => {
      const bodyToSend = {
        email: 'defaultAdmin@email.com',
        password: '123',
      };

      const response = await request(app)
        .post('/api/auth/login')
        .send(bodyToSend);

      expect(response.status).toBe(200);
      expect(response.body.status).toBe('success');

      const token = response.body.data;
      const isValidToken = verifyToken(token);

      expect(isValidToken).toBeTruthy();
    });

    test('Should not return a valid login token due to invalid credentials', async () => {
      const bodyToSend = {
        email: 'defaultAdmin@email.com',
        password: 'wrong_password',
      };

      const response = await request(app)
        .post('/api/auth/login')
        .send(bodyToSend);

      expect(response.status).toBe(401);
      expect(response.body.status).toBe('error');

      expect(response.body.errorCode).toBe('INVALID_CREDENTIALS');
    });

    test('Should not return a valid login token due to missing password parameter ', async () => {
      const bodyToSend = {
        email: 'defaultAdmin@email.com',
      };

      const response = await request(app)
        .post('/api/auth/login')
        .send(bodyToSend);

      expect(response.status).toBe(400);
      expect(response.body.status).toBe('error');

      expect(response.body.errorCode).toBe('VALIDATION_SCHEMA_ERROR');
    });

    test('Should not return a valid login token due to missing email parameter ', async () => {
      const bodyToSend = {
        password: '123',
      };

      const response = await request(app)
        .post('/api/auth/login')
        .send(bodyToSend);

      expect(response.status).toBe(400);
      expect(response.body.status).toBe('error');

      expect(response.body.errorCode).toBe('VALIDATION_SCHEMA_ERROR');
    });

    test('Should not return a valid login token due to invalid email value type ', async () => {
      const bodyToSend = {
        email: 1,
        password: '123',
      };

      const response = await request(app)
        .post('/api/auth/login')
        .send(bodyToSend);

      expect(response.status).toBe(400);
      expect(response.body.status).toBe('error');

      expect(response.body.errorCode).toBe('VALIDATION_SCHEMA_ERROR');
    });

    test('Should not return a valid login token due to invalid password value type ', async () => {
      const bodyToSend = {
        email: 'defaultAdmin@email.com',
        password: 123,
      };
      const response = await request(app)
        .post('/api/auth/login')
        .send(bodyToSend);

      expect(response.status).toBe(400);
      expect(response.body.status).toBe('error');

      expect(response.body.errorCode).toBe('VALIDATION_SCHEMA_ERROR');
    });
  });
});

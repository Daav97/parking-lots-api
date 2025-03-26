import request from 'supertest';
import app from '../../app.js';

describe('/api/users Endpoints', () => {
  describe('POST ', () => {
    // Creation tests
    test('Should create a new admin user', async () => {
      const bodyToSend = {
        email: 'user1@email.com',
        password: '123',
        role: 'admin',
      };

      const response = await request(app).post('/api/users').send(bodyToSend);

      expect(response.status).toBe(201);
      expect(response.body.status).toBe('success');

      const responseData = response.body.data;
      expect(responseData).toHaveProperty('id');
      expect(responseData.id).toBeTruthy();
      expect(responseData.email).toBe(bodyToSend.email);
      expect(responseData.role).toBe(bodyToSend.role);
    });

    const user2BodyToSend = {
      email: 'user2@email.com',
      password: '123',
      role: 'user',
    };

    test('Should create a new normal user', async () => {
      const response = await request(app)
        .post('/api/users')
        .send(user2BodyToSend);

      expect(response.status).toBe(201);
      expect(response.body.status).toBe('success');

      const responseData = response.body.data;
      expect(responseData).toHaveProperty('id');
      expect(responseData.id).toBeTruthy();
      expect(responseData.email).toBe(user2BodyToSend.email);
      expect(responseData.role).toBe(user2BodyToSend.role);
    });

    // Email validation tests
    test('Should not create a new user because the email is duplicated', async () => {
      const response = await request(app)
        .post('/api/users')
        .send(user2BodyToSend);

      expect(response.status).toBe(400);
      expect(response.body.status).toBe('error');
      expect(response.body.errorCode).toBe('USER_EMAIL_ALREADY_EXISTS');
    });

    test('Should not create a new user because the email is missing', async () => {
      const bodyToSend = {
        password: '123',
        role: 'admin',
      };
      const response = await request(app).post('/api/users').send(bodyToSend);

      expect(response.status).toBe(400);
      expect(response.body.status).toBe('error');
      expect(response.body.errorCode).toBe('VALIDATION_SCHEMA_ERROR');
    });

    test('Should not create a new user due to invalid email format', async () => {
      const bodyToSend = {
        email: 'this_is_not_a_valid_email',
        password: '123',
        role: 'admin',
      };
      const response = await request(app).post('/api/users').send(bodyToSend);

      expect(response.status).toBe(400);
      expect(response.body.status).toBe('error');
      expect(response.body.errorCode).toBe('VALIDATION_SCHEMA_ERROR');
    });

    test('Should not create a new user due to invalid email value type', async () => {
      const bodyToSend = {
        email: 1,
        password: '123',
        role: 'admin',
      };
      const response = await request(app).post('/api/users').send(bodyToSend);

      expect(response.status).toBe(400);
      expect(response.body.status).toBe('error');
      expect(response.body.errorCode).toBe('VALIDATION_SCHEMA_ERROR');
    });

    // Password validation tests
    test('Should not create a new user because the password is missing', async () => {
      const bodyToSend = {
        email: 'user3@email.com',
        role: 'admin',
      };
      const response = await request(app).post('/api/users').send(bodyToSend);

      expect(response.status).toBe(400);
      expect(response.body.status).toBe('error');
      expect(response.body.errorCode).toBe('VALIDATION_SCHEMA_ERROR');
    });

    test('Should not create a new user due to invalid password value type', async () => {
      const bodyToSend = {
        email: 'user3@email.com',
        password: 123, //Wrong value type example, expected string
        role: 'admin',
      };
      const response = await request(app).post('/api/users').send(bodyToSend);

      expect(response.status).toBe(400);
      expect(response.body.status).toBe('error');
      expect(response.body.errorCode).toBe('VALIDATION_SCHEMA_ERROR');
    });

    test('Should not create a new user due to invalid password minimum size', async () => {
      const bodyToSend = {
        email: 'user3@email.com',
        password: '1', //Wrong minimum size
        role: 'admin',
      };
      const response = await request(app).post('/api/users').send(bodyToSend);

      expect(response.status).toBe(400);
      expect(response.body.status).toBe('error');
      expect(response.body.errorCode).toBe('VALIDATION_SCHEMA_ERROR');
    });

    // Role validation tests
    test('Should not create a new user because the role is missing', async () => {
      const bodyToSend = {
        email: 'user3@email.com',
        password: '123',
      };
      const response = await request(app).post('/api/users').send(bodyToSend);

      expect(response.status).toBe(400);
      expect(response.body.status).toBe('error');
      expect(response.body.errorCode).toBe('VALIDATION_SCHEMA_ERROR');
    });

    test('Should not create a new user due to invalid role value type', async () => {
      const bodyToSend = {
        email: 'user3@email.com',
        password: '123',
        role: 1, //Wrong value type, expected string
      };
      const response = await request(app).post('/api/users').send(bodyToSend);

      expect(response.status).toBe(400);
      expect(response.body.status).toBe('error');
      expect(response.body.errorCode).toBe('VALIDATION_SCHEMA_ERROR');
    });

    test('Should not create a new user due to invalid role option', async () => {
      const bodyToSend = {
        email: 'user3@email.com',
        password: '123',
        role: 'this_is_not_a_valid_role',
      };
      const response = await request(app).post('/api/users').send(bodyToSend);

      expect(response.status).toBe(400);
      expect(response.body.status).toBe('error');
      expect(response.body.errorCode).toBe('VALIDATION_SCHEMA_ERROR');
    });
  });
});

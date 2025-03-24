import express from 'express';
import AuthService from '../services/authService.js';
import { joiValitadorHandler } from '../middlewares/joiValidatorHandler.js';
import { loginSchema } from '../schemas/authSchema.js';
import responses from '../util/responses.js';

const router = express.Router();
const service = new AuthService();

router.post('/login', joiValitadorHandler(loginSchema, 'body'), login);

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const token = await service.loginUser(email, password);
    responses.success(res, { message: 'User authenticated', data: token });
  } catch (error) {
    next(error);
  }
}

export default router;

import express, { response } from 'express';
import UsersService from '../services/usersService.js';
import { joiValitadorHandler } from '../middlewares/joiValidatorHandler.js';
import { createUserSchema } from '../schemas/usersSchema.js';
import CustomError from '../errors/CustomError.js';
import responses from '../util/responses.js';

const router = express.Router();
const service = new UsersService();

router.post('/', joiValitadorHandler(createUserSchema, 'body'), createUser);

async function createUser(req, res, next) {
  try {
    const body = req.body;

    const existingUser = await service.findByEmail(body.email);
    if (existingUser) {
      throw CustomError.badRequest({
        errorCode: 'USER_EMAIL_ALREADY_EXISTS',
        message: 'This email is already registered.',
      });
    }

    const newUser = await service.create(body);
    responses.success(res, {
      message: 'Created new user',
      statusCode: 201,
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
}

export default router;

import Joi from 'joi';

const email = Joi.string().email();
const password = Joi.string().min(3);
const role = Joi.string();

const VALID_ROLES = ['admin', 'user'];

export const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  role: role.required().valid(...VALID_ROLES),
});

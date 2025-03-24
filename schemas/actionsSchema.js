import Joi from 'joi';

const VALID_USER_TYPES = ['corporate', 'provider', 'visitor'];

const parkingId = Joi.string().uuid();
const userType = Joi.string();

export const checkInSchema = Joi.object({
  parkingId: parkingId.required(),
  userType: userType.required().valid(...VALID_USER_TYPES),
});

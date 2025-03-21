import Joi from 'joi';
import { ParkingSchema } from '../db/models/parkingModel.js';

const NAME_MIN_LENGTH = 3;
const NAME_MAX_LENGTH = 50;

const MIN_SPOTS = 50;
const MAX_SPOTS = 1500;

const VALID_PARKING_TYPES = ['public', 'private', 'courtesy'];

const name = Joi.string().min(NAME_MIN_LENGTH).max(NAME_MAX_LENGTH);
const spots = Joi.number().integer().min(MIN_SPOTS).max(MAX_SPOTS);
const contact = Joi.string().pattern(/^\+?[1-9]\d{1,14}$/);
const parkingType = Joi.string();

const limit = Joi.number().integer();
const skip = Joi.number().integer();
const orderBy = Joi.string();
const orderDirection = Joi.string();

const VALID_ORDER_TYPES = ['asc', 'desc'];

export const createParkingSchema = Joi.object({
  name: name.required(),
  spots: spots.required().messages({
    'number.min': `The parking lot is too small. "spots" must be greater than or equal to ${MIN_SPOTS}`,
    'number.max': `The parking lot is too big. "spots" must be less than or equal to ${MAX_SPOTS}`,
  }),
  contact: contact.required().messages({
    'string.pattern.base': '\"contact\" must be a valid phone number',
  }),
  parkingType: parkingType.required().valid(...VALID_PARKING_TYPES),
});

const VALID_PARKING_PROPERTIES = Object.keys(ParkingSchema);

export const queryParkingsSchema = Joi.object({
  limit,
  skip,
  orderBy: orderBy.valid(...VALID_PARKING_PROPERTIES),
  orderDirection: orderDirection.valid(...VALID_ORDER_TYPES),
}).and('orderBy', 'orderDirection');

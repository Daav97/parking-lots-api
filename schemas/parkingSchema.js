import Joi from 'joi';

const NAME_MIN_LENGTH = 3;
const NAME_MAX_LENGTH = 50;

const MIN_SPOTS = 50;
const MAX_SPOTS = 1500;

const VALID_PARKING_TYPES = ['public', 'private', 'courtesy'];

const name = Joi.string().min(NAME_MIN_LENGTH).max(NAME_MAX_LENGTH);
const spots = Joi.number().integer().min(MIN_SPOTS).max(MAX_SPOTS);
const contact = Joi.string().pattern(/^\+?[1-9]\d{1,14}$/);
const parkingType = Joi.string();

export const createParkingSchema = Joi.object({
  name: name.required(),
  spots: spots.required(),
  contact: contact.required().messages({
    'string.pattern.base': '\"contact\" must be a valid phone number',
  }),
  parkingType: parkingType.required().valid(...VALID_PARKING_TYPES),
});

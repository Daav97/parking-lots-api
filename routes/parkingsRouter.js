import express from 'express';
import responses from '../util/responses.js';
import { joiValitadorHandler } from '../middlewares/joiValidatorHandler.js';
import { createParkingSchema } from '../schemas/parkingSchema.js';

const router = express.Router();

router.get('/', getAllParkings);

router.post(
  '/',
  joiValitadorHandler(createParkingSchema, 'body'),
  createParking,
);

router.patch('/', updateParking);

function getAllParkings(req, res, next) {
  responses.success(res, { message: 'Obtained all parkings' });
}

function createParking(req, res, next) {
  responses.success(res, {
    message: 'Created new parking lot',
    statusCode: 201,
  });
}

function updateParking(req, res, next) {
  responses.success(res, { message: 'Updated parking', statusCode: 201 });
}

export default router;

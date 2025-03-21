import express from 'express';
import responses from '../util/responses.js';
import { joiValitadorHandler } from '../middlewares/joiValidatorHandler.js';
import { createParkingSchema } from '../schemas/parkingSchema.js';
import ParkingsService from '../services/parkingsService.js';

const router = express.Router();
const service = new ParkingsService();

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

async function createParking(req, res, next) {
  try {
    const body = req.body;
    const newParking = await service.create(body);
    responses.success(res, {
      message: 'Created new parking lot',
      statusCode: 201,
      data: newParking,
    });
  } catch (error) {
    next(error);
  }
}

function updateParking(req, res, next) {
  responses.success(res, { message: 'Updated parking', statusCode: 201 });
}

export default router;

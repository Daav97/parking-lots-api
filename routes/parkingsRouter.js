import express from 'express';
import responses from '../util/responses.js';
import { joiValitadorHandler } from '../middlewares/joiValidatorHandler.js';
import {
  createParkingSchema,
  queryParkingsSchema,
} from '../schemas/parkingSchema.js';
import ParkingsService from '../services/parkingsService.js';
import Boom from '@hapi/boom';

const router = express.Router();
const service = new ParkingsService();

router.get(
  '/',
  joiValitadorHandler(queryParkingsSchema, 'query'),
  getAllParkings,
);

router.post(
  '/',
  joiValitadorHandler(createParkingSchema, 'body'),
  createParking,
);

router.patch('/', updateParking);

async function getAllParkings(req, res, next) {
  try {
    const parkings = await service.find(req.query);
    responses.success(res, {
      message: 'Obtained all parkings',
      data: parkings,
    });
  } catch (error) {
    next(error);
  }
}

async function createParking(req, res, next) {
  try {
    const body = req.body;

    const existingParking = await service.findByName(body.name);
    if (existingParking) {
      throw Boom.badRequest('Parking name already exists.');
    }

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

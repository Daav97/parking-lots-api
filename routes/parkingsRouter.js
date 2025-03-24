import express from 'express';
import responses from '../util/responses.js';
import { joiValitadorHandler } from '../middlewares/joiValidatorHandler.js';
import {
  createParkingSchema,
  queryParkingsSchema,
  getParkingSchema,
  updateParkingSchema,
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

router.get(
  '/:id',
  joiValitadorHandler(getParkingSchema, 'params'),
  getParkingById,
);

router.post(
  '/',
  joiValitadorHandler(createParkingSchema, 'body'),
  createParking,
);

router.patch(
  '/:id',
  joiValitadorHandler(getParkingSchema, 'params'),
  joiValitadorHandler(updateParkingSchema, 'body'),
  updateParking,
);

async function getAllParkings(req, res, next) {
  try {
    const parkings = await service.find(req.query);
    responses.success(res, {
      message: 'Obtained all parkings',
      data: {
        totalItems: parkings.length,
        items: parkings,
      },
    });
  } catch (error) {
    next(error);
  }
}

async function getParkingById(req, res, next) {
  try {
    const { id } = req.params;
    const parkingFound = await service.findById(id);
    responses.success(res, {
      message: 'Parking found successfully',
      data: parkingFound,
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

async function updateParking(req, res, next) {
  try {
    const { id } = req.params;
    const body = req.body;

    const parkingUpdated = await service.update(id, body);
    responses.success(res, {
      message: 'Parking updated',
      statusCode: 201,
      data: parkingUpdated,
    });
  } catch (error) {
    next(error);
  }
}

export default router;

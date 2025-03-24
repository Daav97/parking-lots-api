import express from 'express';
import responses from '../util/responses.js';
import CheckInService from '../services/checkInService.js';
import { checkInSchema } from '../schemas/actionsSchema.js';
import { joiValitadorHandler } from '../middlewares/joiValidatorHandler.js';
import CustomError from '../errors/CustomError.js';

const router = express.Router();
const checkInService = new CheckInService();

router.post(
  '/check-in',
  joiValitadorHandler(checkInSchema, 'body'),
  checkInAction,
);

async function checkInAction(req, res, next) {
  try {
    const { parkingId, userType } = req.body;
    const result = await checkInService.checkIn(parkingId, userType);

    if (!result.success) {
      throw CustomError.forbidden({
        message: 'Invalid Access',
        errorCode: 'INVALID_ACCESS',
      });
    }

    return responses.success(res, result);
  } catch (error) {
    next(error);
  }
}

export default router;

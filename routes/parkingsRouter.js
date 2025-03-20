import express from 'express';
import responses from '../util/responses.js';

const router = express.Router();

router.get('/', getAllParkings);
router.post('/', createParking);
router.patch('/', updateParking);

function getAllParkings(req, res, next) {
  responses.success({ res, message: 'Obtained all parkings' });
}

function createParking(req, res, next) {
  responses.success({
    res,
    message: 'Created new parking lot',
    statusCode: 201,
  });
}

function updateParking(req, res, next) {
  responses.success({ res, message: 'Updated parking', statusCode: 201 });
}

export default router;

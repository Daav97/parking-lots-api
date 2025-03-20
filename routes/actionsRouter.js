import express from 'express';
import responses from '../util/responses.js';

const router = express.Router();

router.post('/checkIn', checkInAction);

function checkInAction(req, res, next) {
  responses.success({ req, res, message: 'CheckIn Correct' });
}

export default router;

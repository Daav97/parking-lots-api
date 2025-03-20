import express from 'express';

const router = express.Router();

router.post('/checkIn', checkInAction);

function checkInAction(req, res, next) {
  res.send('Validate checkIn');
}

export default router;

import express from 'express';

const router = express.Router();

router.get('/', getAllParkings);
router.post('/', createParking);
router.patch('/', updateParking);

function getAllParkings(req, res, next) {
  res.send('Obtain all parkings');
}

function createParking(req, res, next) {
  res.send('Create new parking lot');
}

function updateParking(req, res, next) {
  res.send('Update parking');
}

export default router;

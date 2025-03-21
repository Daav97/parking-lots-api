import { sequelize } from '../libs/sequelize.js';

const { models } = sequelize;

class ParkingsService {
  async create(data) {
    const newParking = await models.Parking.create(data);
    return newParking;
  }
}

export default ParkingsService;

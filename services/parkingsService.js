import { sequelize } from '../libs/sequelize.js';

const { models } = sequelize;

class ParkingsService {
  async create(data) {
    const newParking = await models.Parking.create(data);
    return newParking;
  }

  async find() {
    const response = await models.Parking.findAll();
    return response;
  }
}

export default ParkingsService;

import { sequelize } from '../libs/sequelize.js';

const { models } = sequelize;

class ParkingsService {
  async create(data) {
    const newParking = await models.Parking.create(data);
    return newParking;
  }

  async find() {
    const parkings = await models.Parking.findAll();
    return parkings;
  }

  async findByName(name) {
    const foundParking = await models.Parking.findOne({
      where: { name },
    });
    return foundParking;
  }
}

export default ParkingsService;

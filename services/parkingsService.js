import { sequelize } from '../libs/sequelize.js';

const { models } = sequelize;

class ParkingsService {
  async create(data) {
    const newParking = await models.Parking.create(data);
    return newParking;
  }

  async find(query) {
    const options = {
      where: {},
    };
    const { limit, skip, orderBy, orderDirection } = query;

    if (limit) {
      options.limit = limit;
    }

    if (skip) {
      options.offset = skip;
    }

    if (orderBy && orderDirection) {
      options.order = [[orderBy, orderDirection]];
    }

    const parkings = await models.Parking.findAll(options);
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

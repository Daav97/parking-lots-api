import { sequelize } from '../libs/sequelize.js';
import Boom from '@hapi/boom';

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

  async findOne(id) {
    const parkingFound = await models.Parking.findByPk(id);
    if (!parkingFound) {
      throw Boom.notFound('Parking not found');
    }
    return parkingFound;
  }

  async update(id, changes) {
    const parkingFound = await this.findOne(id);
    const parkingUpdated = await parkingFound.update(changes);
    return parkingUpdated;
  }
}

export default ParkingsService;

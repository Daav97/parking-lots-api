import { sequelize } from '../libs/sequelize.js';
import CustomError from '../errors/CustomError.js';

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

  async findById(id) {
    const parkingFound = await models.Parking.findByPk(id);
    if (!parkingFound) {
      throw CustomError.notFound({
        errorCode: 'PARKING_NOT_FOUND',
        message: 'Parking not found',
      });
    }
    return parkingFound;
  }

  async update(id, changes) {
    const parkingFound = await this.findById(id);
    const parkingUpdated = await parkingFound.update(changes);
    return parkingUpdated;
  }
}

export default ParkingsService;

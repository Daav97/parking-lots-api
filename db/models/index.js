import { Parking, ParkingSchema } from './parkingModel.js';

export function setupModels(sequelize) {
  Parking.init(ParkingSchema, Parking.config(sequelize));
}

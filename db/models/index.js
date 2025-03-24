import { Parking, ParkingSchema } from './parkingModel.js';
import { User, UserSchema } from './userModel.js';

export function setupModels(sequelize) {
  Parking.init(ParkingSchema, Parking.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
}

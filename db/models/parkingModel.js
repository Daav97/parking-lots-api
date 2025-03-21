import { Sequelize, Model, DataTypes } from 'sequelize';

export const PARKINGS_TABLE = 'parkings';

export const ParkingSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  spots: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  contact: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  parkingType: {
    allowNull: false,
    field: 'parking_type',
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
};

export class Parking extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: PARKINGS_TABLE,
      modelName: 'Parking',
      timestamps: false,
    };
  }
}

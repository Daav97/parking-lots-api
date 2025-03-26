import { Sequelize } from 'sequelize';
import { setupModels } from '../db/models/index.js';
import { config } from '../config/config.js';

const USER = encodeURIComponent(config.postgresUser);
const PASSWORD = encodeURIComponent(config.postgresPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.postgresDB}`;

export const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: config.nodeEnv !== 'test',
});

setupModels(sequelize);

sequelize.sync();

import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  postgresDB: process.env.POSTGRES_DB,
  postgresUser: process.env.POSTGRES_USER,
  postgresPassword: process.env.POSTGRES_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
};

import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';

export const signToken = (payload, options = {}) => {
  return jwt.sign(payload, config.jwtSecret, { ...options });
};

export const verifyToken = (token) => {
  return jwt.verify(token, config.jwtSecret);
};

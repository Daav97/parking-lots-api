import responses from '../util/responses.js';

export const errorLogs = (err, req, res, next) => {
  console.error(err);
  next(err);
};

export const errorHandler = (err, req, res, next) => {
  responses.error(res);
};

import responses from '../util/responses.js';

export const errorLogs = (err, req, res, next) => {
  if (!err.isCustomError) {
    console.error(err);
  }
  next(err);
};

export const errorHandler = (err, req, res, next) => {
  responses.error(res);
};

export const customErrorHandler = (err, req, res, next) => {
  if (err.isCustomError) {
    return responses.error(res, err);
  }
  next(err);
};

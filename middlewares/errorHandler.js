import responses from '../util/responses.js';

export const errorLogs = (err, req, res, next) => {
  if (!err.isBoom) {
    console.error(err);
  }
  next(err);
};

export const errorHandler = (err, req, res, next) => {
  const ERROR_STATUS_CODE = 500;
  const ERROR_MESSAGE = 'Internal Server Error';
  responses.error(res, {
    message: ERROR_MESSAGE,
    statusCode: ERROR_STATUS_CODE,
  });
};

export const boomErrorHandler = (err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err;
    return responses.error(res, {
      message: output.payload.message,
      statusCode: output.statusCode,
    });
  }
  next(err);
};

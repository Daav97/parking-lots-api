import responses from '../util/responses.js';

export const errorLogs = (err, req, res, next) => {
  console.error(err);
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
};

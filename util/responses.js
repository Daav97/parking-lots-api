const SUCCESS_STATUS = 'success';
const ERROR_STATUS = 'error';

const success = (res, { message = '', statusCode = 200, data = {} }) => {
  res.status(statusCode).send({
    status: SUCCESS_STATUS,
    statusCode: statusCode,
    message: message,
    data: data,
  });
};

const error = (
  res,
  { message = 'Internal server error', statusCode = 500 },
) => {
  res.status(statusCode).send({
    status: ERROR_STATUS,
    errorCode: statusCode,
    message: message,
  });
};

export default { success, error };

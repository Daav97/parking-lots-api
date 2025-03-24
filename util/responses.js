const SUCCESS_STATUS = 'success';
const ERROR_STATUS = 'error';

const success = (res, { message = '', statusCode = 200, data = {} }) => {
  res.status(statusCode).send({
    status: SUCCESS_STATUS,
    message: message,
    data: data,
  });
};

const error = (
  res,
  {
    message = 'Something went wrong...',
    statusCode = 500,
    errorCode = 'INTERNAL_SERVER_ERROR',
  } = {},
) => {
  res.status(statusCode).send({
    status: ERROR_STATUS,
    errorCode: errorCode,
    message: message,
  });
};

export default { success, error };

const success = (
  res,
  { message = '', status = 'success', statusCode = 200, data = {} },
) => {
  res.status(statusCode).send({
    status: status,
    statusCode: statusCode,
    message: message,
    data: data,
  });
};

const error = (
  res,
  { message = 'Internal server error', status = 'error', statusCode = 500 },
) => {
  res.status(statusCode).send({
    status: status,
    errorCode: statusCode,
    message: message,
  });
};

export default { success, error };

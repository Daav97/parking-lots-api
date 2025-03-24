import responses from '../util/responses.js';

/**
 * Dynamic validator
 * @param {*} schema Joi Schema
 * @param {*} property Specifies where to extract the information from (body, params, query), as it may vary depending on whether it is a POST, GET, etc.
 * @returns
 */
export const joiValitadorHandler = (schema, property) => {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });

    if (error) {
      return responses.error(res, {
        errorCode: 'VALIDATION_SCHEMA_ERROR',
        message: error.message,
        statusCode: 400,
      });
    }
    next();
  };
};

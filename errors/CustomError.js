import HttpError from './HttpError.js';

export default class CustomError {
  static unauthorized({
    message = 'Unauthorized',
    errorCode = 'UNAUTHORIZED',
  } = {}) {
    return new HttpError(message, 401, errorCode);
  }

  static badRequest({
    message = 'Bad Request',
    errorCode = 'BAD_REQUEST',
  } = {}) {
    return new HttpError(message, 400, errorCode);
  }

  static notFound({ message = 'Not found', errorCode = 'NOT_FOUND' } = {}) {
    return new HttpError(message, 404, errorCode);
  }
}

export default class HttpError extends Error {
  constructor(message, statusCode, errorCode) {
    super(message);
    this.statusCode = statusCode;
    this.isCustomError = true;
    this.errorCode = errorCode;
  }
}

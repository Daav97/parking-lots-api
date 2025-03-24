import CustomError from '../errors/CustomError.js';

export const checkRoles = (...validRoles) => {
  return (req, res, next) => {
    const user = req.user;
    if (validRoles.includes(user.role)) {
      next();
    } else {
      next(CustomError.unauthorized());
    }
  };
};

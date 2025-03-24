import CustomError from '../errors/CustomError.js';
import { verifyPassword } from '../libs/bcrypt.js';
import { signToken } from '../libs/jsonwebtoken.js';
import UsersService from './usersService.js';

const usersService = new UsersService();

class AuthService {
  async loginUser(email, password) {
    const foundUser = await usersService.findByEmail(email);
    if (!foundUser) {
      throw CustomError.unauthorized({
        errorCode: 'INVALID_CREDENTIALS',
        message: 'Invalid email or password',
      });
    }

    const isMatch = await verifyPassword(password, foundUser.password);

    if (!isMatch) {
      throw CustomError.unauthorized({
        errorCode: 'INVALID_CREDENTIALS',
        message: 'Invalid email or password',
      });
    }

    const payload = {
      sub: foundUser.id,
      email: foundUser.email,
      role: foundUser.role,
    };

    const token = signToken(payload);

    return token;
  }
}

export default AuthService;

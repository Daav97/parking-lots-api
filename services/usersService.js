import { sequelize } from '../libs/sequelize.js';
import { hashPassword } from '../libs/bcrypt.js';

const { models } = sequelize;

class UsersService {
  async create(data) {
    const hashedPassword = await hashPassword(data.password);

    const newUser = await models.User.create({
      ...data,
      password: hashedPassword,
    });

    delete newUser.dataValues.password;
    return newUser;
  }

  async findByEmail(email) {
    const foundUser = await models.User.findOne({
      where: { email },
    });
    return foundUser;
  }
}

export default UsersService;

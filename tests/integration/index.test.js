import './usersTest';
import UsersService from '../../services/usersService';
import AuthService from '../../services/authService';

let adminToken;
let normalToken;

beforeAll(async () => {
  await createDefaultUsers();
  adminToken = await obtainAdminToken();
  normalToken = await obtainNormalToken();
});

const defaultAdminUser = {
  email: 'defaultAdmin@email.com',
  password: '123',
  role: 'admin',
};

const defaultNormalUser = {
  email: 'defaultNormal@email.com',
  password: '123',
  role: 'user',
};

async function createDefaultUsers() {
  const service = new UsersService();

  await service.create(defaultAdminUser);
  await service.create(defaultNormalUser);
}

const service = new AuthService();

async function obtainAdminToken() {
  return await service.loginUser(
    defaultAdminUser.email,
    defaultAdminUser.password,
  );
}

async function obtainNormalToken() {
  return await service.loginUser(
    defaultNormalUser.email,
    defaultNormalUser.password,
  );
}

export const getAdminToken = () => adminToken;
export const getNormalToken = () => normalToken;

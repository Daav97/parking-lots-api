import AuthService from '../../services/authService';
import { defaultAdminUser, defaultNormalUser } from './defaultValues';

const service = new AuthService();

export async function obtainAdminToken() {
  return await service.loginUser(
    defaultAdminUser.email,
    defaultAdminUser.password,
  );
}

export async function obtainNormalToken() {
  return await service.loginUser(
    defaultNormalUser.email,
    defaultNormalUser.password,
  );
}

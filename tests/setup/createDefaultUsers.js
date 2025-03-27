import UsersService from '../../services/usersService';
import { defaultAdminUser, defaultNormalUser } from './defaultValues';

export async function createDefaultUsers() {
  const service = new UsersService();

  await service.create(defaultAdminUser);
  await service.create(defaultNormalUser);
}

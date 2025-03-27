import './usersTests';
import './authTests';
import { createDefaultUsers } from '../setup/createDefaultUsers';
import { obtainAdminToken, obtainNormalToken } from '../setup/obtainTokens.js';

let adminToken;
let normalToken;

beforeAll(async () => {
  await createDefaultUsers();
  adminToken = await obtainAdminToken();
  normalToken = await obtainNormalToken();
});

export const getAdminToken = () => adminToken;
export const getNormalToken = () => normalToken;

import './usersTests';
import './authTests';
import './parkingsTests.js';
import { createDefaultUsers } from '../setup/createDefaultUsers';
import { obtainAdminToken, obtainNormalToken } from '../setup/obtainTokens.js';
import { createDefaultParkings } from '../setup/createDefaultParkings.js';

export let adminToken;
export let normalToken;

beforeAll(async () => {
  await createDefaultUsers();
  adminToken = await obtainAdminToken();
  normalToken = await obtainNormalToken();
  await createDefaultParkings();
});

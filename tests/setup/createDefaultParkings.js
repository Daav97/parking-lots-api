import ParkingsService from '../../services/parkingsService';
import {
  defaultParking1,
  defaultParking2,
  defaultParking3,
  defaultParking4,
  defaultParking5,
  defaultParking6,
} from './defaultValues';

export async function createDefaultParkings() {
  const service = new ParkingsService();

  await service.create(defaultParking1);
  await service.create(defaultParking2);
  await service.create(defaultParking3);
  await service.create(defaultParking4);
  await service.create(defaultParking5);
  await service.create(defaultParking6);
}

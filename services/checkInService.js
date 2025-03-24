import ParkingFactory from '../factories/Parking/ParkingFactory.js';
import ParkingsService from './parkingsService.js';

const parkingsService = new ParkingsService();

class CheckInService {
  async checkIn(parkingId, userType) {
    const parkingInfoFound = await parkingsService.findById(parkingId);

    const parking = ParkingFactory.create(parkingInfoFound.parkingType);
    const result = parking.validateEntry(userType);
    return result;
  }
}

export default CheckInService;

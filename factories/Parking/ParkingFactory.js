import PublicParking from './PublicParking.js';
import PrivateParking from './PrivateParking.js';
import CourtesyParking from './CourtesyParking.js';

export default class ParkingFactory {
  static create(parkingType) {
    switch (parkingType) {
      case 'public':
        return new PublicParking('public');
      case 'private':
        return new PrivateParking('private');
      case 'courtesy':
        return new CourtesyParking('courtesy');
      default:
        throw new Error('Invalid parking type');
    }
  }
}

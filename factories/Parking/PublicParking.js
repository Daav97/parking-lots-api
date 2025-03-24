import Parking from './Parking.js';

export default class PublicParking extends Parking {
  validateEntry(userType) {
    return {
      success: true,
      message: 'Valid access',
      data: {
        parkingType: this.parkingType,
        userType,
      },
    };
  }
}

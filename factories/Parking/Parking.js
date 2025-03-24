// Parking 'Interface'
export default class Parking {
  constructor(parkingType) {
    this.parkingType = parkingType;
  }
  validateEntry(userType) {
    throw new Error('This method should be overridden');
  }
}

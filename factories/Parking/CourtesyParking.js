import Parking from './Parking.js';
import CustomError from '../../errors/CustomError.js';

export default class CourtesyParking extends Parking {
  validateEntry(userType) {
    const dayOfWeek = new Date().getDay();

    if (userType !== 'visitor') {
      throw CustomError.forbidden({
        message: 'User type not allowed',
        errorCode: 'USER_TYPE_NOT_ALLOWED',
      });
    }

    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      throw CustomError.forbidden({
        message: 'This parking lot is not avaible on weekdays',
        errorCode: 'WEEKDAY_NOT_ALLOWED',
      });
    }

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

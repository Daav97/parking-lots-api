import HttpError from '../../errors/HttpError';
import PrivateParking from '../../factories/Parking/PrivateParking';

describe('Private Parking Tests', () => {
  let parking;

  beforeEach(() => {
    parking = new PrivateParking();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  // Corporate + Valid day (Weekday)
  test('Should allow access to corporate user into private parking on weekday', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-03-24T12:00:00Z')); //Monday
    const userType = 'corporate';
    const result = parking.validateEntry(userType);

    const expectedAnswer = {
      success: true,
      message: 'Valid access',
      data: {
        parkingType: parking.parkingType,
        userType,
      },
    };

    expect(result).toEqual(expectedAnswer);
  });

  // Corporate + Invalid day (Weekend)
  test('Should not allow access to corporate user into private parking on weekend', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-03-23T12:00:00Z')); //Sunday
    const userType = 'corporate';
    expect(() => {
      parking.validateEntry(userType);
    }).toThrowError(HttpError);
  });

  // Provider + Valid day (Weekday)
  test('Should not allow access to provider user into private parking on weekday', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-03-25T12:00:00Z')); //Tuesday
    const userType = 'provider';
    expect(() => {
      parking.validateEntry(userType);
    }).toThrowError(HttpError);
  });

  // Provider + Invalid day (Weekend)
  test('Should not allow access to provider user into private parking on weekend', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-03-22T12:00:00Z')); //Saturday
    const userType = 'provider';
    expect(() => {
      parking.validateEntry(userType);
    }).toThrowError(HttpError);
  });

  // Visitor + Valid day (Weekday)
  test('Should not allow access to visitor user into private parking on weekday', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-03-26T12:00:00Z')); //Wednesday
    const userType = 'visitor';
    expect(() => {
      parking.validateEntry(userType);
    }).toThrowError(HttpError);
  });

  // Visitor + Invalid day (Weekend)
  test('Should not allow access to visitor user into private parking on weekend', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-03-23T12:00:00Z')); //Sunday
    const userType = 'visitor';
    expect(() => {
      parking.validateEntry(userType);
    }).toThrowError(HttpError);
  });
});

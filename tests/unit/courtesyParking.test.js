import HttpError from '../../errors/HttpError';
import CourtesyParking from '../../factories/Parking/CourtesyParking';

describe('Courtesy Parking Tests', () => {
  let parking;

  beforeEach(() => {
    parking = new CourtesyParking();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  // Corporate + Valid day (Weekend)
  test('Should not allow access to corporate user into courtesy parking on weekend', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-03-22T12:00:00Z')); //Saturday
    const userType = 'corporate';
    expect(() => {
      parking.validateEntry(userType);
    }).toThrowError(HttpError);
  });

  // Corporate + Invalid day (Weekday)
  test('Should not allow access to corporate user into courtesy parking on weekday', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-03-25T12:00:00Z')); //Tuesday
    const userType = 'corporate';
    expect(() => {
      parking.validateEntry(userType);
    }).toThrowError(HttpError);
  });

  // Provider + Valid day (Weekend)
  test('Should not allow access to provider user into courtesy parking on weekend', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-03-23T12:00:00Z')); //Sunday
    const userType = 'provider';
    expect(() => {
      parking.validateEntry(userType);
    }).toThrowError(HttpError);
  });

  // Provider + Invalid day (Weekday)
  test('Should not allow access to provider user into courtesy parking on weekday', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-03-26T12:00:00Z')); //Wednesday
    const userType = 'provider';
    expect(() => {
      parking.validateEntry(userType);
    }).toThrowError(HttpError);
  });

  // Visitor + Valid day (Weekend)
  test('Should allow access to visitor user into courtesy parking on weekend', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-03-23T12:00:00Z')); //Sunday
    const userType = 'visitor';
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

  // Visitor + Invalid day (Weekday)
  test('Should not allow access to visitor user into courtesy parking on weekday', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-03-24T12:00:00Z')); //Monday
    const userType = 'visitor';
    expect(() => {
      parking.validateEntry(userType);
    }).toThrowError(HttpError);
  });
});

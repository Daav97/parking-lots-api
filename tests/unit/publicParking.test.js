import PublicParking from '../../factories/Parking/PublicParking';

describe('Public Parking Tests', () => {
  let parking;

  beforeEach(() => {
    parking = new PublicParking();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  // Corporate + Weekday
  test('Should allow access to corporate user into public parking on weekday', () => {
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

  // Corporate + Weekend
  test('Should allow access to corporate user into public parking on weekend', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-03-23T12:00:00Z')); //Sunday
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

  // Provider + Weekday
  test('Should allow access to provider user into public parking on weekday', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-03-25T12:00:00Z')); //Tuesday
    const userType = 'provider';
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

  // Provider + Weekend
  test('Should allow access to provider user into public parking on weekend', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-03-22T12:00:00Z')); //Saturday
    const userType = 'provider';
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

  // Visitor + Weekday
  test('Should allow access to visitor user into public parking on weekday', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-03-26T12:00:00Z')); //Wednesday
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

  // Visitor + Weekend
  test('Should allow access to visitor user into public parking on weekend', () => {
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
});

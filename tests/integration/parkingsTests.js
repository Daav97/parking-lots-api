import request from 'supertest';
import app from '../../app.js';
import { adminToken, normalToken } from './index.test.js';

describe('/api/parkings Endpoints', () => {
  describe('POST', () => {
    // Creation test
    test('Should create a new public parking using valid admin token', async () => {
      const bodyToSend = {
        name: 'Parking 7',
        spots: 500,
        contact: '+333',
        parkingType: 'public',
      };
      const response = await request(app)
        .post('/api/parkings')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(bodyToSend);

      expect(response.status).toBe(201);
      expect(response.body.status).toBe('success');

      const responseData = response.body.data;
      expect(responseData).toHaveProperty('id');
      expect(responseData.id).toBeTruthy();

      expect(responseData.name).toBe(bodyToSend.name);
      expect(responseData.spots).toBe(bodyToSend.spots);
      expect(responseData.contact).toBe(bodyToSend.contact);
      expect(responseData.parkingType).toBe(bodyToSend.parkingType);
    });

    test('Should create a new private parking using valid admin token', async () => {
      const bodyToSend = {
        name: 'Parking 8',
        spots: 500,
        contact: '+333',
        parkingType: 'private',
      };
      const response = await request(app)
        .post('/api/parkings')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(bodyToSend);

      expect(response.status).toBe(201);
      expect(response.body.status).toBe('success');

      const responseData = response.body.data;
      expect(responseData).toHaveProperty('id');
      expect(responseData.id).toBeTruthy();

      expect(responseData.name).toBe(bodyToSend.name);
      expect(responseData.spots).toBe(bodyToSend.spots);
      expect(responseData.contact).toBe(bodyToSend.contact);
      expect(responseData.parkingType).toBe(bodyToSend.parkingType);
    });

    test('Should create a new courtesy parking using valid admin token', async () => {
      const bodyToSend = {
        name: 'Parking 9',
        spots: 500,
        contact: '+333',
        parkingType: 'courtesy',
      };
      const response = await request(app)
        .post('/api/parkings')
        .set('Authorization', `Bearer ${adminToken}`)
        .send(bodyToSend);

      expect(response.status).toBe(201);
      expect(response.body.status).toBe('success');

      const responseData = response.body.data;
      expect(responseData).toHaveProperty('id');
      expect(responseData.id).toBeTruthy();

      expect(responseData.name).toBe(bodyToSend.name);
      expect(responseData.spots).toBe(bodyToSend.spots);
      expect(responseData.contact).toBe(bodyToSend.contact);
      expect(responseData.parkingType).toBe(bodyToSend.parkingType);
    });

    test('Should not create a new parking using valid normal token', async () => {
      const bodyToSend = {
        name: 'Parking 0',
        spots: 500,
        contact: '+333',
        parkingType: 'public',
      };
      const response = await request(app)
        .post('/api/parkings')
        .set('Authorization', `Bearer ${normalToken}`)
        .send(bodyToSend);

      expect(response.status).toBe(401);
      expect(response.body.status).toBe('error');
      expect(response.body.errorCode).toBe('UNAUTHORIZED');
    });

    test('Should not create a new parking without token', async () => {
      const bodyToSend = {
        name: 'Parking 0',
        spots: 500,
        contact: '+333',
        parkingType: 'public',
      };
      const response = await request(app)
        .post('/api/parkings')
        .send(bodyToSend);

      expect(response.status).toBe(401);
    });

    /*
    // Name validation tests
    test('Should not create a new parking because name is duplicated', () => {});

    test('Should not create a new parking due to missing name parameter', () => {});

    test('Should not create a new parking due to invalid name value type', () => {});

    test('Should not create a new parking due to name is too short', () => {});

    test('Should not create a new parking due to name is too big', () => {});

    // Spots validation tests
    test('Should not create a new parking due to missing spots parameter', () => {});

    test('Should not create a new parking because is too small', () => {});

    test('Should not create a new parking because is too big', () => {});

    // Contact validation tests
    test('Should not create a new parking due to missing contact parameter', () => {});

    test('Should not create a new parking due to invalid contact value type', () => {});

    test('Should not create a new parking due to invalid phone number', () => {});

    // Parking type validation tests
    test('Should not create a new parking due to missing parking type parameter', () => {});

    test('Should not create a new parking due to invalid parking type option', () => {});
    */
  });
  /*
  describe('GET', () => {
    // Get All
    test('Should return a list of all created parkings', () => {});

    // Pagination
    test('Should return a list of all created parkings limiting by 2', () => {});

    test('Should return a list of all created parkings skipping first one', () => {});

    test('Should return a list of all created parkings limiting by 2 and skipping first one', () => {});

    test('Should return a list of all created parkings limiting by 2 skipping first one and ordering by spots asc', () => {});

    test('Should return a list of all created parkings skipping first one and ordering by spots desc', () => {});

    test('Should return a list of all created parkings', () => {}); //ordering by name asc

    test('Should return a list of all created parkings', () => {}); //ordering by name desc

    test('Should return a list of all created parkings', () => {}); //ordering by spots asc

    test('Should return a list of all created parkings', () => {}); //ordering by spots desc

    test('Should return a list of all created parkings', () => {}); //ordering by contact asc

    test('Should return a list of all created parkings', () => {}); //ordering by contact desc

    test('Should return a list of all created parkings', () => {}); //ordering by patking type asc

    test('Should return a list of all created parkings', () => {}); //ordering by parking type desc

    // shouldnt de orderby sin order direction

    // shouldnt si no es un order by de opcion valida

    //shouldnt si orderdirection no es opcion valida

    //shouldn si skip no es numero

    //shouldn si skip no es entero

    //shouldn si limit no es numero

    //shouldn si limit no es entero

    //shouldnt si order by no es string

    // shouldnt si orderDirection no es string

    // Get by Id
    test('Should return a specific parking by id', () => {}); //TODO: guardar id previamente creado

    //shouldnt si el id enviado no es un uuid valido

    //shouldnt si enviamos un uuid creado aqui ya que no deberia existir en bd
  });
  describe('PATCH', () => {
    //shouldnt si el id enviado no es un uuid valido
    //shouldnt si enviamos un uuid creado aqui ya que no deberia existir en bd
    //should si modifica correctamente los dos valores (ademas hacer otro GET para comprobar)
    //should si modifica correctamente un solo valor valores (ademas hacer otro GET para comprobar) x2
    //shouldnt si enviamos otro parametro que no sea de los permitidos (name)
    //shouldnt si enviamos otro parametro que no sea de los permitidos (parkingType)
  });
  */
});

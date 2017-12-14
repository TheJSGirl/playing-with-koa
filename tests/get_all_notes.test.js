const request = require('supertest');
const app = require('../server');
const expect = require('expect');
const { populatedData } = require('./SeedDB');

beforeEach(populatedData);

describe('Get all the notes ENDPOINT is api/notes/', () => {
  it('should return 200', done => [
    request(app)
      .get('/api/notes')
      .end((err, response) => {
        expect(response.status).toBe(200);
        done();
      }),
  ]);

  it('should return success is true', done => [
    request(app)
      .get('/api/notes')
      .end((err, response) => {
        console.log(response);
        expect(response.body.success).toEqual(true);
        done();
      }),
  ]);
});

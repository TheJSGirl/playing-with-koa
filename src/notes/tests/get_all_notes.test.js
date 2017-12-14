const Notes = require('../model');
const request = require('supertest');
const app = require('../../../server');
const expect = require('expect');

describe('Get all the notes ENDPOINT is api/notes/', () => {
  it('should return 200', done => [
    request(app)
      .get('/api/notes')
      .end((err, response) => {
        expect(response.status).toBe(200);
        done();
      }),
  ]);
});

const app = require('../server');
const request = require('supertest');
const expect = require('expect');
const { populatedData, dummyData } = require('./SeedDB');

beforeEach(populatedData);

describe('GET note ENDPOINT is: api/notes/:id', () => {
  it('should return 400 if ObjectID is invalid', (done) => {
    const invalidNoteId = '45929292a';
    request(app)
      .get(`/api/notes/${invalidNoteId}`)
      .expect(400)
      .end((err, response) => {
        expect(response.body.success).toEqual(false);
        expect(response.body.error.code).toBe(400);
        expect(response.body.error.message).toBe('Invalid Id');
        // console.log(err);
        done();
      });
  });

  it('should return 200 if ObjectID is valid', (done) => {
    const validNoteId = dummyData[0].id;

    request(app)
      .get(`/api/notes/${validNoteId}`)
      .expect(200)
      .end((err, response) => {
        expect(response.body.success).toBe(true);
        done();
      });
  });
});

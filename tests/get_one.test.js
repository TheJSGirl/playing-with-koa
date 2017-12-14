const app = require('../server');
const request = require('supertest');
const expect = require('expect');
const { populatedData, dummyData } = require('./SeedDB');

beforeEach(populatedData);

describe('GET note ENDPOINT is: api/notes/:id', () => {
  // it('should return 500 if ObjectID is invalid', (done) => {
  //   const inValidNoteId = '45929292a';
  //   request(app)
  //     .get(`/api/notes/${inValidNoteId}`)
  //     .expect(500)
  //     .end((err, response) => {
  //       expect(response.body.success).toEqual(false);
  //       // console.log(err);
  //       done();
  //     });
  // });
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

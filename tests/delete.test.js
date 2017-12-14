const app = require('../server');
const request = require('supertest');
// const expect = require('expect');
const { populatedData, dummyData } = require('./SeedDB');

beforeEach(populatedData);

describe('DELETE note ENDPOINT is: /api/notes/:id', () => {
  it('should return 200 if ObjectID is valid', (done) => {
    const validNoteId = dummyData[0].id;

    request(app)
      .delete(`/api/notes/${validNoteId}`)
      .expect(200)
      .end((err, response) => {
        // expect(response.body.success).toBe(true);
        console.log(response.body);
        console.error(err.body);

        done();
      });
  });
});

// this file will contain the seed data
const { ObjectID } = require('mongodb');
const Notes = require('../../model');

// create an id for Notes
const noteOne = new ObjectID();
const noteTwo = new ObjectID();
const noteThree = new ObjectID();

const dummyData = [

  {
    _id: noteOne,
    notes: 'dummy data one',
  },
  {
    _id: noteTwo,
    notes: 'dummy data two',
  },
  {
    _id: noteThree,
    notes: 'dummy data three',
  },
];

const populatedData = (done) => {
  Notes.remove({}).then(() => Notes.insertMany(dummyData)).then(() => done());
}

module.exports = { populatedData, dummyData };

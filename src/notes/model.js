const mongoose = require('mongoose');

const { Schema } = mongoose;

const NoteSchema = new Schema({
  notes: {
    type: String,
    // required: [true, 'notes is required'],
  },

});

const Notes = mongoose.model('note', NoteSchema);

// Notes.insertMany({
//   notes: 'playing with koa',
// });
module.exports = Notes;

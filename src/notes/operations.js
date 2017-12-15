const Notes = require('./model');

async function getData() {
  const allNotes = await Notes.find({});
  // console.log('-------------', allNotes);
  return allNotes;
}

async function getOne(id) {
  const getOneNote = await Notes.findById(id);
  return getOneNote;
}

async function create(ctx, data) {
  // console.log(data);
  const notes = new Notes(data);
  // console.log('notes-----------------', notes);
  await notes.save();
  return notes;
}

async function remove(id) {
  const notesToBeDeleted = await Notes.findById(id);
  return notesToBeDeleted;
}


module.exports = {
  getData,
  getOne,
  create,
  remove,
};

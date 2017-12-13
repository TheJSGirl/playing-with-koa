const Notes = require('./model');

async function getData() {
  const allNotes = await Notes.find({});
  // console.log('-------------', allNotes);
  return allNotes;
}


async function create(data) {
  const notes = new Notes(data);
  await notes.save();
  return notes;
}

async function remove(id) {
  const notesToBeDeleted = await Notes.findById(id);
  await notesToBeDeleted.remove;

  return notesToBeDeleted;
}

module.exports = {
  getData,
  create,
  remove,
};

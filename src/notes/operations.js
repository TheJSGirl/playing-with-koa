const Notes = require('./model');

async function find() {
  try {
    const allNotes = await Notes.find({});
    console.log(Notes);
    // console.log(allNotes);
    return allNotes;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
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
  find,
  create,
  remove,
};
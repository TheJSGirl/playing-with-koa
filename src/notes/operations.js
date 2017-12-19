const Notes = require('./model');
// const Token = require('../authentication/model');

async function getData(ctx) {
  // const { token } = ctx.request.header;
  // const user = await Token.findOne({ token });
  // console.log('user detail-----------', ctx.request.user);
  // console.log('token is ------', token);
  // const allNotes = await Notes.findById({ userId });


  // console.log('-------------', allNotes);
  // console.log('user ==============', user);
  const userId = ctx.request.user._id;

  const allNotes = await Notes.find({ userId });
  return allNotes;
}

async function getOne(id) {
  const getOneNote = await Notes.findById(id);
  return getOneNote;
}

async function create(ctx, notes) {
  // console.log(data);
  const id = ctx.request.user._id;
  console.log('---------------id', id);
  // const notesData = {
  //   ...notes,
  //   user: id,
  // };
  notes.user = id;
  console.log(notes);
  const newNote = new Notes(notes);
  console.log('notes-----------------', newNote);
  await newNote.save();
  return newNote;
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

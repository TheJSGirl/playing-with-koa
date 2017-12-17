const User = require('../users/model');
const Token = require('./model');
const validator = require('validator');
const errors = require('njs/lib/errors');
const bcrypt = require('bcrypt');

async function createUser(ctx, data) {
  console.log('**data inside create user=>', data);

  const { name, email, password } = data;

  if (!name || `${name}`.length < 3) {
    throw new errors.InvalidData('Name minimum 3 characters, field is empty');
  }

  // validation
  if (!validator.isEmail(`${email}`)) {
    throw new errors.InvalidData('Invalid Email');
  }

  if (!password || `${password}`.length < 5) {
    throw new errors.InvalidData('Password is too short, minimum 5 chars');
  }

  const userData = new User(data);
  await userData.save();
}

async function signInUser(ctx, data) {
  const { email, password } = data;

  console.log('operation data', data);

  // validate data
  if (!validator.isEmail(`${email}`)) {
    throw new errors.InvalidData('Invalid Email');
  }

  if (!password || `${password}`.length < 5) {
    throw new errors.InvalidData('Password is too short, minimum 5 chars');
  }

  const [user] = await User.find({ email });

  // check user exist
  if (!user) {
    throw new errors.NotFound('user not exist');
  }
  const isValidPassword = bcrypt.compareSync(`${password}`, user.password);

  if (!isValidPassword) {
    throw new errors.InvalidData('invalid password');
  }
  console.log('password correct');
}

module.exports = {
  createUser,
  signInUser,
};
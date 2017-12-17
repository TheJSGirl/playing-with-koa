const User = require('../users/model');
const Token = require('./model');
const validator = require('validator');
const errors = require('njs/lib/errors');
const bcrypt = require('bcrypt');
const tokenGenator = require('../../utils/tokenGenerator');

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

  // since password is correct we should generate token
  const token = tokenGenator(email);

  // now save toke with userId in token collection
  const newToken = new Token({ token, user: user._id });
  await newToken.save();

  // delete password field from user object
  const userData = JSON.parse(JSON.stringify(user));
  delete userData.password;
  delete userData.__v;
  return [userData, token, true];
}

async function signOutUser(token) {
  console.log('token-----',token);
  await Token.findOneAndRemove({ token });
  return {};
}

module.exports = {
  createUser,
  signInUser,
  signOutUser,
};

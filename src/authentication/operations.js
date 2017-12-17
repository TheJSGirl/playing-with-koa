const User = require('../users/model');
const Token = require('./model');
const validator = require('validator');
const errors = require('njs/lib/errors');


async function createUser(ctx, data) {
  console.log('**data inside create user=>', data);

  const { name, email, password } = data;

  if (name && `${name}`.length < 3) {
    throw new errors.InvalidData('Name minimum 3 characters');    
  }

  // validation
  if (!validator.isEmail(`${email}`)) {
    throw new errors.InvalidData('Invalid Email');
  }

  if (password && `${password}`.length < 5) {
    throw new errors.InvalidData('Password is too short, minimum 5 chars');
  }

  const userData = new User(data);
  await userData.save();
}

module.exports = {
  createUser,
};

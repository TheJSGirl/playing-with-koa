const User = require('./user');
const Token = require('./authToken');

async function createUser(ctx, data) {
  const userData = new User(data);
  // userData.save();
}

module.exports = {
  createUser,
};

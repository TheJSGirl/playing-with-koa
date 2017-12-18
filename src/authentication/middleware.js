const errors = require('njs/lib/errors');
const Token = require('../authentication/model');
const User = require('../users/model');
const secureUserData = require('../../utils/secureUserData');

module.exports = async function checkAuth(ctx, next) {
  console.log('--------------middleware ctx', ctx);
  if (!ctx.request.header.token) {
    throw new errors.UnauthorizedAccess('Please login to continue');
  }
  const { token } = ctx.request.header;
  const tokenFromDb = await Token.findOne({ token });

  const isValid = new Date(tokenFromDb.expires).getTime() > new Date().getTime();
  // check the token is expired or not
  if (!isValid) {
    throw new errors.UnauthorizedAccess('Token expired');
  }
  // get user from DB
  const user = await User.findOne({ _id: tokenFromDb.user });

  // const userData = JSON.parse(JSON.stringify(user));
  // delete userData.password;
  // delete userData.__v;

  const userData = secureUserData(user);

  ctx.request.user = userData;
  await next();
};

const errors = require('njs/lib/errors');
const Token = require('../authentication/model');

module.exports = async function checkAuth(ctx, next) {
  if (!ctx.request.session || !ctx.request.header.token) {
    throw new errors.NotAllowed('Please login to continue');
  }
  const { token } = ctx.request.header;
  const tokenFromDb = await Token.findOne({ token });

  const isExpired = tokenFromDb.expires.getTime() > new Date().getTime();
  // check the token is expired or not
  if (isExpired) {
    throw new errors.NotAllowed('Token expired');
  }
  
  next();
};

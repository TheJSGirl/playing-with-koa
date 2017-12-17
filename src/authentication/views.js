const operations = require('./operations');
const config = require('../../config');

const allowSession = config.sessions && config.sessions.enabled;
const key = config.authentication.tokenKey || 'authToken';
const sessionKey = allowSession ? key : '';

async function signUp(ctx) {
  const data = ctx.request.fields;
  // console.log('data-----', data);

  const result = await operations.createUser(ctx, data);

  // successJson is provided in ctx by /bootstrap/middlewares/responses.js
  ctx.successJson(result);
}

async function signIn(ctx) {
  const data = ctx.request.fields;
  console.log('---data', data);
  const response = await operations.signInUser(ctx, data);
  
  // create session
  if (allowSession) {
    ctx.session = {};
    // store the token in session
    ctx.session[sessionKey] = response[1];
    ctx.isAuthenticated = response[2];
  }
  ctx.successJson(response);
}


module.exports = {
  signUp,
  signIn,
};

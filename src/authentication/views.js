const operations = require('./operations');
const config = require('../../config');
const errors = require('njs/lib/errors');

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

function formateResponse(user, token) {
  return {
    user,
    token,
  };
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
    // console.log('making', ctx.session);
  }
  const formattedRes = formateResponse(response[0], response[1]);
  ctx.successJson(formattedRes);
}

async function signOut(ctx) {
  // console.log(ctx.request);
  const { token } = ctx.request.header;
  if (!token) {
    throw new errors.NotFound('token is required');
  }
  ctx.session = null;
  const res = await operations.signOutUser(token);
  ctx.successJson(res);
}

module.exports = {
  signUp,
  signIn,
  signOut,
};

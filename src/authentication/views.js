const operations = require('./operations');

async function signUp(ctx) {
  const data = ctx.request.fields;
  console.log('data-----', data);

  const result = await operations.createUser(ctx, data);

  // successJson is provided in ctx by /bootstrap/middlewares/responses.js
  ctx.successJson(result);
}

async function signIn(ctx) {
  const data = ctx.request.fields;

  const result = await operations.signInUser(ctx, data);

  ctx.successJson(result);
}


module.exports = {
  signUp,
  signIn,
};

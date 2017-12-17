const operations = require('./operations');
const validator = require('validator');

async function signUp(ctx) {
  const data = ctx.request.fields;
  console.log('data-----', data);
  const result = await operations.createUser(data);
  
  // successJson is provided in ctx by /bootstrap/middlewares/responses.js
  ctx.successJson(result);
}

module.exports = {
  signUp
}
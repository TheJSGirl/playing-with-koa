const operations = require('./operations');
const errors = require('njs/lib/errors');
// const response = require('../../utils/responses');

async function getAll(ctx) {
  // console.log('**user details => ', ctx.request.user); // made by checkAuth
  // console.log(ctx);
  const result = await operations.getData(ctx);
  console.log('-------------------result', result);
  ctx.successJson(result);
}

async function getOne(ctx) {
  const { id } = ctx.params;
  // check if Id is valid by matching with a regex
  const checkForHexRegExp = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i;
  if (!checkForHexRegExp.test(id)) {
    // (ctx, { code: 400, msg: 'Invalid Id' });
    throw new errors.InvalidData('Invalid Id');
  }
  const result = await operations.getOne(id);
  ctx.successJson(result);
}


async function postData(ctx) {
  const data = ctx.request.fields;
  console.log('----data from request', data);
  const result = await operations.create(ctx, data);
  ctx.successJson(ctx, result, 200);
}

async function del(ctx) {
  const { id } = ctx.params;
  const result = await operations.remove(id);
  ctx.successJson(ctx, result, 200);
}

module.exports = {
  getAll,
  getOne,
  postData,
  del,
};


const operations = require('./operations');
const responses = require('../../utils/responses');

async function get(ctx) {
  // console.log(ctx);
  const result = await operations.getData();
  responses.successJson(ctx, result, 200);
}

async function postData(ctx) {
  const data = ctx.request.fields;
  console.log('----data from request', data);
  const result = await operations.create(ctx, data);
  responses.successJson(ctx, result, 200);
}

async function del(ctx) {
  const { id } = ctx.params;
  const result = await operations.del(id);
  responses.successJson(ctx, result, 200);
}

module.exports = {
  get,
  postData,
  del,
};


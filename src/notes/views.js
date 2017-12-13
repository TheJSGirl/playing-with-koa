const operations = require('./operations');
const responses = require('../../utils/responses');

async function get(ctx) {
  console.log(ctx);
  const result = await operations.getData();
  console.log('***', result);
  responses.successJson(ctx, result, 200);
  // console.log(result);
}

module.exports = {
  get,
};


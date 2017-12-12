const operations = require('./operations');

async function get(ctx) {
  const result = await operations.find();
  console.log(result);
  ctx.successJson(ctx, result, 200);
  // console.log(result);
}

module.exports = {
  get,
};


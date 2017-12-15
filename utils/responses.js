const json = (ctx, payload) => {
  // console.log('payload---', payload);
  ctx.set('Content-Type', 'application/json');
  ctx.body = payload;
};

const successJson = async (ctx, data, statusCode) => {
  ctx.status = parseInt(statusCode, 10) || 200;
  // console.log('****data:', data);
  json(ctx, { success: true, data });
};


/**
 * This function will be used to send error
 * response to the client
 *
 * @param {object} ctx - the context object of Koa
 * @param {object} err object containing msg and code
 */
function errorJson(ctx, error) {
  const err = {
    code: error.code || 500,
    message: error.message || error.msg,
  };
  ctx.status = parseInt(err.code, 10);
  json(ctx, { success: false, error: err });
}


module.exports = {
  successJson,
  errorJson,
};

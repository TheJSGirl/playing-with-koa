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

const errorJson = (ctx, e) => {
  const err = {
    code: e.code || 500,
    message: e.message || e.msg,
  };
  ctx.status = parseInt(err.code, 10);
  json(ctx, { success: false, error: err });
};


module.exports = {
  successJson,
  errorJson,
};

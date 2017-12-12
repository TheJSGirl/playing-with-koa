const json = (ctx, payload) => {
  ctx.set('Content-Type', 'appilication/json');
  ctx.body = payload;
};
const successJson = (ctx, data, statusCode) => {
  ctx.status = parseInt(statusCode, 10) || 200;
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

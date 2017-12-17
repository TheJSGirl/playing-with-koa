const Router = require('koa-router');

const router = new Router();

// routes from authentication
const authRoutes = require('./authentication/routes');

// use middleware
router.use(...[
  '',
  authRoutes.routes(),
]);

module.exports = router;

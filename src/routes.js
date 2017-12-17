const Router = require('koa-router');

const router = new Router();

// routes from authentication
const authRoutes = require('./authentication/routes');
const notesRoutes = require('./notes/routes');
const checkAuth = require('./authentication/middleware');

// use middleware
router.use(...[
  '',
  authRoutes.routes(),
]);

router.use(checkAuth);

router.use(...[
  '',
  notesRoutes.routes(),
]);

module.exports = router;

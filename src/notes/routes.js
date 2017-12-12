const Router = require('koa-router');

const views = require('./views');

const router = new Router();

router.prefix('/notes');
router.get('/', views.get);


module.exports = router;

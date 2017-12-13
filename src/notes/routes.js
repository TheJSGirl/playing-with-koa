const Router = require('koa-router');

const views = require('./views');

const router = new Router();

router.prefix('/api/notes');
router.get('', '/', views.get);
router.post('', '/', views.postData);
router.delete('', '/', views.del);


module.exports = router;

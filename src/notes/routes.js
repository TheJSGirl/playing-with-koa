const Router = require('koa-router');

const views = require('./views');

const router = new Router();

router.prefix('/api/notes');
router.get('', '/', views.get);
router.get('', '/:id', views.getOne);
router.post('', '/', views.postData);
router.delete('', '/:id', views.del);


module.exports = router;

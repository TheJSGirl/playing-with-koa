const Router = require('koa-router');
const views = require('./views');

const router = new Router();

router.post('/signup', views.signUp);
// router.post('signin', views.signIn);


module.exports = router;

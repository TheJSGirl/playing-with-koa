const Router = require('koa-router');
const views = require('./views');

const router = new Router();

router.post('/signup', views.signUp);


module.exports = router;

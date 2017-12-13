const Koa = require('koa');
// const route = require('koa-route');
const Router = require('koa-router');
require('./src/config');
require('./src/db');
const noteRoutes = require('./src/notes/routes');

const app = new Koa();
const router = new Router();
const port = process.env.PORT;


// // GET route
// router.get('/notes', async (ctx) => {
//   try {
//     const allNotes = await Note.find({});
//     ctx.response.body = allNotes;
//   } catch (error) {
//     console.error(error);
//     ctx.response.body = { msg: 'something went wrong' };
//   }
// });
// router.post('/notes', async (ctx) => {
//   try {
//     const postData = new Note({ notes: ctx.request.body.notes });
//     const dbData = await postData.save();
//     successJson(ctx, dbData, 200);

//   } catch (error) {
//     console.error(error);
//   }
// });
router.use(...['', noteRoutes.routes()]);
app
  .use(require('koa-body')())
  .use(router.routes())
  .use(router.allowedMethods());

// and then give it a port to listen for
app.listen(port);
console.log('Koa listening on port', port);


import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

// Imports are not used for simplified initialization.
require('./handlers/logger').init(app);
require('./handlers/errors').init(app);
require('./handlers/bodyParser').init(app);
require('./handlers/routes').init(app);

router.get('/', async(ctx, next) => { ctx.body = 'Viewer backend'; });
app.use(router.routes());

export default app;

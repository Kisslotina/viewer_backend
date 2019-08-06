import path from 'path';
import mountRoutes from 'koa-mount-routes';

exports.init = app => {
  mountRoutes(app, path.join(__dirname, '../controllers/v1'), {
    urlPrefix: '/api/v1/',
    autoPlural: false
  });
};

const Router = require('koa-router');
const router = new Router();

router
  .get('/list', require('./list'));

module.exports = router;
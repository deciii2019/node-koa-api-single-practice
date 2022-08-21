const Router = require('koa-router');
const router = new Router();

router
  .get('/lookUp',require('./list')) //回傳清單

router
  .post('/insert',require('./insert')) //新增

router
  .post('/delete',require('./delete')) //刪除

router
  .post('/update',require('./update')) //更新

router
  .get('/query',require('./query')) //查詢

module.exports = router;
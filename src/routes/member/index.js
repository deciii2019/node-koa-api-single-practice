const Router = require('koa-router');
const router = new Router();

router
  .get('/lookUp',require('./list')) //回傳清單

router
  .post('/insert',require('./insert'),require('./list')) //新增 並回傳清單

router
  .post('/delete',require('./delete'),require('./list')) //刪除 並回傳清單 並回傳清單

router
  .post('/update',require('./update'),require('./list')) //更新 並回傳清單

router
  .get('/query',require('./query')) //查詢

module.exports = router;
module.exports = async (ctx, next) => {
  let deviceList = await ctx.server.rds('device').select('*');
  ctx.body = {
    deviceList
  };
  await next();
};
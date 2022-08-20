module.exports = async (ctx, next) => {
  let memberList = await ctx.server.rds('member').select('*');
  ctx.body = {
    memberList
  };
  await next();
};
module.exports = async (ctx, next) => 
{
    const req = ctx.request.body
    await ctx.server.rds('member').where("memid",req["memid"]).update(req['update']).then(()=> console.log('data updated'));
    ctx.body = {};
    await next();
};

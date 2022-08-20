module.exports = async (ctx, next) => 
{
try
{
    const data = ctx.request.body
    await ctx.server.rds('member').insert(data).then(()=> console.log('data inserted'));
    ctx.body = {};
    await next();
}
catch(error)
{
    ctx.body = {"error":error.message};
}
};

module.exports = async (ctx, next) => 
{
    let queryString = ctx.request.url.split('?')
    const minReq = queryString[1]; 
    let qS = minReq.split('=')
    const pk = qS[0];
    const v = qS[1];
    await ctx.server.rds('member').where(pk,v).del().then(()=> console.log('data deleted'));
    ctx.body = {};
    await next();
};

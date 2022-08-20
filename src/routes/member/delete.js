var db;
var response;

module.exports = async (ctx, next) => 
{
    let queryString = ctx.request.url.split('?')
    const minReq = queryString[1]; 
    let qS = minReq.split('=')
    const pk = qS[0];
    const v = qS[1];
    db = ctx.server.rds('member');
    await ctx.server.rds('member').where(pk,v).del().then(()=> ShowData(ctx,v));
    await next(ctx.body = {response});
};


async function ShowData(ctx,target)
{
    try
    {
        response = await db.where('memid',target);
    }
    catch(error)
    {
        response = {"error":error.message};
    }
    
}


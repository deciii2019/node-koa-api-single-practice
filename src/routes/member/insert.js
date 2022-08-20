var db;
var response;
module.exports = async (ctx, next) => 
{
try
{
    const data = ctx.request.body
    let memberData; 
    db = ctx.server.rds('member');
    await ctx.server.rds('member').insert(data).then(()=> ShowData(ctx,data['memid']));
    await next(ctx.body = {response});
}
catch(error)
{
    ctx.body = {"error":error.message};
}
};


async function ShowData(ctx,target)
{
    response =  await db.where('memid',target);
}
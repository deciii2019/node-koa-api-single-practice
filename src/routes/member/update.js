var db;
var response;

module.exports = async (ctx, next) => 
{
    const req = ctx.request.body
    db = ctx.server.rds('member');
    await ctx.server.rds('member').where("memid",req["memid"]).update(req['update']).then(()=> ShowData(ctx,req["memid"]));
    await next(ctx.body = {response});
};

async function ShowData(ctx,target)
{
    response =  await db.where('memid',target);
}


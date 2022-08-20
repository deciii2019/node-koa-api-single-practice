var mainRedis;
var memberList;
module.exports = async (ctx, next) => {

    let queryString = ctx.request.url.split('?')
    const minReq = queryString[1];
    let qS = minReq.split('=')
    const pk = qS[0];
    const v = qS[1];
    var res;
    mainRedis = ctx.server.redisSet.getAllClient()[0];

    await mainRedis.get(pk,(err,rawdata)=>{
        if(err){console.log(err)}
        if(!!rawdata)
        {
            res = JSON.parse(rawdata);
            memberList = res;
        }
        else
        {
            memberList = goMySQL(ctx.server.rds('member'),pk,v);
        }

        
    });
    ctx.body = {
        memberList
    };
    await next();
};

async function goMySQL(table,pk,v)
{
    res = await table.where(pk,v);
    SaveRedis(pk);
    return res;
    
}

async function SaveRedis(pk)
{
    await mainRedis.set(pk, JSON.stringify(res),'EX',60, err =>{if(err){console.log(err)}})
} 

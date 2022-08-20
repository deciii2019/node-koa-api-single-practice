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
    await mainRedis.get(v,(err,rawdata)=>{
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

        
    }).then();
    await next(ctx.body = {memberList});
};

async function goMySQL(table,pk,v)
{
    memberList = await table.where(pk,v);
    SaveAllInRedis(memberList,v);
    return memberList;
    
}

async function SaveAllInRedis(memberList,v)
{
    await mainRedis.set(v, JSON.stringify(memberList),'EX',60, err =>{if(err){console.log(err)}})
}


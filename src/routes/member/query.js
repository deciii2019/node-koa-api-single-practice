var mainRedis;
var memberList;

module.exports = async (ctx, next) => {

    console.log('==========Start===========')
    memberList = null;
    let queryString = ctx.request.url.split('?')
    const minReq = queryString[1];
    let qS = minReq.split('=')
    const pk = qS[0];
    const v = qS[1];
    var res;

    mainRedis = ctx.server.redisSet.getAllClient()[0];
    //console.log(mainRedis);
    await mainRedis.get(v,  (err,rawdata)=>
    {
        console.log(rawdata);
        if(err){console.log(err)}
        if(!!rawdata)
        {
            res = JSON.parse(rawdata);
            memberList = res;
            next(ctx.body = {memberList});
        }
       
    });
    
    if(memberList == null)
    {
        await goDB(ctx,next,pk,v);
        console.log('5' + JSON.stringify(memberList))
        next(ctx.body={memberList});

    }
    console.log('==========End===========')
};

async function goDB(ctx, next, pk , v)
{
    memberList = await goMySQL(ctx.server.rds('member'),pk,v);
    var jsonMember =  JSON.stringify(memberList);
    console.log('4 go next ' +  jsonMember )
}

async function goMySQL(table,pk,v)
{
    console.log('1 take from sql')
    var smeberList  = await table.where(pk,v);
    console.log('2 ' + smeberList);

    SaveAllInRedis(smeberList,v);
    return smeberList;
    
}

async function SaveAllInRedis(smeberList,v)
{
    await mainRedis.set(v, JSON.stringify(smeberList),'EX',60, err =>{if(err){console.log(err)}})
}

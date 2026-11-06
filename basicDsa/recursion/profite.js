let arr=[{
    profite:10,
    cost:10
},{

    profite:2,
    cost:19
},

{

    profite:7,
    cost:9
}
,{
    profite:10,
    cost:7
}
];

let budget = 40;

function maxProfile(i, bud, arr)
{
   if(i>=n)return 0;
    // take 
    let takep=0;
    if(bud>=arr[i].cost)
    {
        let myp=arr[i].profite;
        let mybrotherp=maxProfile(i+1,bud-arr[i].cost,arr);
         takep=mybrotherp+myp;

    }

    //notTake
    let myp=0;
    let mybrotherp=maxProfile(i+1,bud,arr);

    let nottakep=myp+mybrotherp;

    return Math.max(takep,nottakep);

}


let res= maxProfile(0,budget,arr);

console.log(res);


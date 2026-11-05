
let candies=[10,20,9,1,0,0,0,2,5];


function maxCandi(i,arr) // i will make a fucntion that gives me the maximum candies that can be collected starting from index i till index n-1
{
if(i>=n)return 0;
// take 
let mycandy=arr[i];
let mybrotherCandy=maxCandi(i+2,arr);
let res1=mycandy+mybrotherCandy;


// not take
let mycandy1=0;
let mybrotherCandy1=maxCandi(i+1,arr);
let res2=mycandy1+mybrotherCandy1;

return Math.max(res1,res2);

}

let ans =maxCandi(0,arr);
console.log(ans);
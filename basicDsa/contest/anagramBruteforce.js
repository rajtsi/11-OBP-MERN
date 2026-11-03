



let arr=['cat','bat','ball','tac','act','tab'];//m // average length of each string is p

function checkAnagram(s1,s2)
{
let s11=s1.split('').sort().join('');
let s22=s2.split('').sort().join('')

if(s11===s22)return true;
else
return false
}

function checkallanagram(s3,arr)
{

let prtm1=true;

for(let i=0;i<arr.length;i++)
{
    let s1=arr[i];
    let s2 = s3;
    let ret=checkAnagram(s1,s2);
   if(ret)
   {
    console.log(s1);
    prtm1=false;
   }
}

if(prtm1){console.log(-1);}

}
let arrofq=['cat','lala','lal'];//n

function solve (arrofq, arr)
{
    for(let i=0;i<arrofq.length;i++)
    {

        console.log('query',i+1);
        checkallanagram(arrofq[i],arr);
    }


}

solve(arrofq,arr);



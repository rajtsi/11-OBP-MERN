let arr=[1,1100,-100,1,2,3,4,5,6,7];

let mini=Infinity;

function solve(element,index,arr){
    mini=Math.min(mini,element);
 console.log('my current index',index, 2*element);
}


arr.forEach(solve);

console.log(arr,mini);




let arr1=[10,20,90,'rajat',{},null,50];
let farr=[];
for(let i=0;i<arr1.length;i++)
{
    if( typeof(arr1[i])==='number')
    {
        farr.push(arr1[i]);
    }
}

console.log(farr);

let myRe = arr1.filter(filterer);

function filterer(element,index,arr)
{
return ( typeof(element)!=='number');  
}

 

console.log(myRe);
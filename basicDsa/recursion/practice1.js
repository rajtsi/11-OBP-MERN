
function pow2(n) {
    if(n===1)return true;
    if(n<1)return false;
    if(n%2 !==0)return false;
    if(n===2)return true;

    let res=pow2(n/2);
    return res;

}

let arr=[8,9,92,292,292,292];

function mini(arr,i)
{
    let n=arr.length;
    if(i===n-1)return arr[i];

    let res= mini(arr,i+1);

    return Math.min(res,arr[i]);
}

console.log(mini(arr,0));

let arr1=[1,50,60,300,500,600,601,602,900,1000,90000,2,3,4,5,6,7,8,90,900,904,1000];




// let arr1=[15,2,36,4,5];
// let arr2=[2,3,4,5,6,7,8,9,900,901,1000];

// let i=0;
// let j=0;
// let result=[];

// while(i<arr1.length && j<arr2.length){
//     if(arr1[i]<arr2[j]){
//         result[result.length]=arr1[i];
//         i++;
//     }else{
//         result[result.length]=arr2[j];
//         j++;
//     }
// }

// console.log(i,j);

// while(i < arr1.length) {
//     result[result.length] = arr1[i];
//     i++;
// }
// while(j < arr2.length) {
//     result[result.length] = arr2[j];
//     j++;
// }
// console.log(result);




   i=0, p=40   //sorted  
   p+1 ,n-1   //sorted 


// let arr3 = [1, 50, 60, 300, 500, 600, 601, 602, 900, 1000, 2000,2, 3, 4, 5, 6, 7, 602, 900, 10000, 20000, 30000]

// for(let i = 0; i < arr3.length; i++){
// let min = i;
// for(let j=i+1;j<arr3.length;j++){
//         if(arr3[j] < arr3[min]){min = j;}
//     }
// let temp = arr3[i];
// arr3[i] = arr3[min];
// arr3[min] = temp;
// }
// console.log(arr3);










i=0, p=40   //sorted  
   p+1 ,n-1   //sorted 

let arr=[10,20,30,40,50,60,70,80,1,2,3,4,5,6,7,8]; // len=16
let i=0;

let j=p+1;
let result=[];

while(i < p+1 && j < arr.length)
    {
    if(arr[i] < arr[j]){
        result.push(arr[i]);
        i++;
    }
    else{
        result.push(arr[j]);
        j++;
    }
}

while(i < p+1){
    result.push(arr[i]);
    i++;
}
while(j < arr.length){
    result.push(arr[j]);
    j++;
}
//console.log(result);
let y=0;
for(let x of result)
{
arr[y++]=x;
}
console.log(arr);






// give me a final array which contains all teh elemenst from both the array in same frequency in sorted order
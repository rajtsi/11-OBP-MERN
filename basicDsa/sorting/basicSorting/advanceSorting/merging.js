
// let arr1=[1,50,60,300,500,600,601,602,900,1000,90000,2,3,4,5,6,7,8,90,900,904,1000];




// // let arr1=[15,2,36,4,5];
// // let arr2=[2,3,4,5,6,7,8,9,900,901,1000];

// // let i=0;
// // let j=0;
// // let result=[];

// // while(i<arr1.length && j<arr2.length){
// //     if(arr1[i]<arr2[j]){
// //         result[result.length]=arr1[i];
// //         i++;
// //     }else{
// //         result[result.length]=arr2[j];
// //         j++;
// //     }
// // }

// // console.log(i,j);

// // while(i < arr1.length) {
// //     result[result.length] = arr1[i];
// //     i++;
// // }
// // while(j < arr2.length) {
// //     result[result.length] = arr2[j];
// //     j++;
// // }
// // console.log(result);




//    i=0, p=40   //sorted  
//    p+1 ,n-1   //sorted 


// // let arr3 = [1, 50, 60, 300, 500, 600, 601, 602, 900, 1000, 2000,2, 3, 4, 5, 6, 7, 602, 900, 10000, 20000, 30000]

// // for(let i = 0; i < arr3.length; i++){
// // let min = i;
// // for(let j=i+1;j<arr3.length;j++){
// //         if(arr3[j] < arr3[min]){min = j;}
// //     }
// // let temp = arr3[i];
// // arr3[i] = arr3[min];
// // arr3[min] = temp;
// // }
// // console.log(arr3);










// i=0, p=40   //sorted  
//    p+1 ,n-1   //sorted 

let arr=[10,20,30,40,50,60,70,80,1,2,3,4,5,6,7,8]; // len=16 o(n)
arr= mergeSort(0,arr.length-1,arr);

console.log(arr);

function merge(i,j,p,arr)
{

   let i1=i;
   let i2=p;
   let j1=p+1;
   let j2=j;

 console.log(i,j,p);
let res=[];
for(i1,j1; i1<=i2 && j1<=j2;)
{
   if(arr[i1]<arr[j1])
   {
      res.push(arr[i1]);
      i1++;
   }
   else
   {
       res.push(arr[j1]);
       j1++;
   }
}
while(i1<=i2)
{
   res.push(arr[i1++]);

}
while(j1<=j2)
{
   res.push(arr[j1++]);
}
// console.log(res);
let k=i;
for(let x of res)
{
   arr[k++]=x;
}
return arr;
}
// give me a final array which contains all teh elemenst from both the array in same frequency in sorted order


// 1st lets understand why do we have a log n ->     see what we are doing sir i swe are deviding our array into 2 halfs every time when calling recurrsive function this will create a call stack of depth or you can say a height of or number of time we can do this before it reaches 1 is log n   so this create number of level as log n

// now in each level we will have n elements to copy and make a new sorted copy of it so we see that at each levelwe are using n  operations this makes each level time complexity as O(n);

// now we have log n levels and O(n) operation in each level so time complexity ifmerge sort become O(nlogn);

// for space complexity we are making an array of length equal to the array given to function   this uses space equal toteh length of teh array but as this particular functions ends same space is free and can be used by other functions who will be called next so we are using same space again and again and maximum lenght we willuse is when i am makimg full array from 2 sorted half soweused maximum of n space at any instance of solution making space complexity as O(n), we ignored call back stack memory as its log n which is very less as compared to O(n); 


function mergeSort(i,j,arr)//i=0,j=1
{  
   let n = j-i+1;
   if(n===1)return arr;// 
   let p = Math.floor(i+ n/2 );
   p=p-1;
   if(n>2){
   mergeSort(i,p,arr);//0,1
   mergeSort(p+1,j,arr);
   }
   merge(i,j,p,arr);
   return arr;
}
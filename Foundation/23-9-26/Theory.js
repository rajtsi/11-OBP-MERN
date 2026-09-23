

// // // shift -> Removing 1st element -> It returns the value of removed 

// // // unshift -> add element at the start of teh array -> New length of teh array

// // // splice (arg1(m), arg2=0 , arg3.....) -> removing + adding  or just reming or just adding -> from any part of the array 

// // // slice  (arg1, arg2)  -> it gived me a new array that means your older on is exactly same  -> both are optional  and start from age1 index and go till arg2 and do not include arg2 index if arg2 is not provided we it will take whole array from arg1 index till array ends

// // // indexOf( arg1 ) agr1 is mondatory and is the value for whihc you need to find index in array

// // let arr = [1, 2, 8, 9, 94, 494, 494, 444, 12, 3, 333383, 3373];

// // console.log(arr.indexOf(3373));
// // console.log(arr.includes(8, 2));   // includes (arg1(m), arg2)- > arg1-> value yo wants to look into array 
// // //   arg2-> optional and is the index from where we need to start looking in array for the agr1 value
// // let arr1 = [0, 0, 0, 0];

// // let newarr = arr1.concat(arr, 0, 0, 0); // concat(all the arguments arr optional they can be array of individual elements); concat make a new array and does not disturbs older arrays;
// // console.log(newarr);


// // // [1,2,4,5,6] -> [6,5,4,2,1] 

// // //    let a = arr[i];
// // //     arr[i]=arr[j];
// // //     arr[j]=a;



// // // [1,2,3,4]

// // newarr.reverse();

// // console.log(newarr);// no argument and it will reverse whol array inplace // it wil not make new array. 


// // length = 100 (n )
// //  index of  10 before reversing -> 20
// //  what will be the index of 10 after reversing th array 


// //  0-> n-1
// //  1-> n-2
// //  2-> n-3


// //  100-1-20 

// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];

// //  arr2 -> [1, 2, 3, 8, 7,6,5,4] 

// for (let i = 1, j = 6; i <=j; i++, j--) {
//    // i = 3, j = 7 -> [1, 2, 3, 8, 5, 6, 7, 4];
//     // i = 4, j = 6 -> [1, 2, 3, 8, 7, 6, 5, 4];
//     // i = 5, j = 5 -> [1, 2, 3, 8, 7, 6, 5, 4];
    
//     // i = 6, j = 4 -> [1, 2, 3, 8, 5, 6, 7, 4];
//     // i = 7, j = 3 -> [1, 2, 3, 4, 5, 6, 7, 8];

//     let temp = arr2[i];
//     arr2[i] = arr2[j];
//     arr2[j] = temp;

// }

// console.log(arr2);
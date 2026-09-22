
// for (let x of arr) {

// }


// arrname.push(comma seperated elements to push at the end)-> it return new lenght of the array
// arrname.pop(); -> return the element extracted  


// let arr = ['a', 'h', 'jaja'];
// const val = arr.shift();
// console.log(arr, val);
// const val1 = arr.unshift('b'); // ['a','b'] 'b', 'nn'
// console.log(arr, val1);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// arr.splice(4); // provided by array 
// //use it with he name of arr 
// // 1st argument is compulsory and is the index from where we have to start deleting the number of element where number is provided as 2nd argument if not provided will delete every element till the end of array and also the index from where we will start inserting new elements in array if list of elements are provided for adddition

// console.log(arr);



// make an array containing elements from 1 to 100 
// then remove [40,.......55]
// and add 150 and 160 at the place of where we had 40 and 41 at teh start of the array

let arr = [];
for (let x = 1; x <= 100; x++) {
    arr.push(x);

}

arr.splice(39, 55 - 40 + 1, 140, 1);
console.log(arr);
let y = 88 - 14;
console.log(arr[y]);

let sli = arr.slice(39, 52); // [140, 150, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66]
console.log(sli);// modify this so that my new sli prints [140, 150, 56, 57, 58, 59, 60, 61, 62,

console.log(arr);
//63, 64, 65, 66]
// 89 -> 89 - 1
// 89 - 1 - 16 + 2=88 - 14

// arr.slice(optional , optional )- > 1st is the index of start , and 2nd is the index where we are supposed to stop

// arr.indexOf(the value of the element for whose yu need to find the index, this is optional and is the start index from where we need to start looking for the element);


console.log(arr.indexOf(1, 10));
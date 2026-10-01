
// let k = {
//     p:1,
//     m:10
// }
// // object destructuring 
// //const { p, m } = K;
// //const { p: p1, m } = K;
// // const {p, ...newObj}=K;

// const new_boj = {...k, n:10};
// k.a=10;

// Searching -> // linear search 
// 

// [1,2,4,290,3,489,2,67,29] -> 1, 2, 2, 3, 4, 29 , 67, 290, 489

//run a loop 
// make a new empty array -> [1, ]

// let ar = [2, 4, 290, 3, 1, 489, 2, 67, 29];

// let strarr = [null, "a", "b", "mul", 1];

// ar.sort();
// strarr.sort();

// console.log(strarr);




// function sort1(ar) {
//     let n = ar.length;
//     let sarr = [];

//     for (let j = 0; j < n; j++) {
//         let mini = Infinity;
//         let miniInd = -1;

//         for (let i = 0; i < n; i++) {
//             if (mini > ar[i]) {
//                 mini = ar[i];
//                 miniInd = i;
//             }
//         }
//         sarr.push(mini);
//         ar[miniInd] = Infinity;

//     }

//     console.log(ar);
//     console.log(sarr);

//     return sarr;
// }

// mini = 1,
//     miniInd = 4;
// ar[miniInd] = Infinity;


// -> [mini,]




// ['2','10'] -> 
// [2,10] -> sorted 

// [2,3,10,4, 20] -> 

// The JavaScript sort() method is a built -in array function used to arrange elements in place.
// By default, sort() converts elements into strings and compares their UTF - 16 code unit values.This means it works perfectly fine for strings but produces unexpected results for numbers.

// ⚠️ Crucial Behavior to Remember
// • In - Place Mutation: It modifies the original array directly and returns a reference to it.It does not create a new array.
// • The "10 before 2" Problem: Because it converts items to strings by default, 10 comes before 2(since the character "1" comes before "2").Always pass a compare function to sort numbers properly.




//arrayName.sort();

// let arr = [10, 2, 10, 38,38181, 282, 4];

// function compare(a, b) {
//     return a - b;
// }

// arr.sort(compare);

// console.log(arr);


// [1, 4, 5, 2]

// increasing order     return a-b;   //if -ve then a go 1st if +ve b goes 1st 

// decreasing order      return b-a; // if +ve b goes 1st if negative a goes 1st 



let arr = [2, 4, 3, 1994, 3, 28292, 2, 27272, 26474];

// 1st sort this number array in increasing oder 
//then print it 
// and thee change the value of 0th index to 10
// and then sort this in decreasing order and print it 

// function f1(a, b) {
//     return a - b;
// }


// function f2(a, b) {
//     return b - a;
// }

// let strar = ['a', 'v', 'l', 'p'];


// function f1(a, b) {
//     return b.localeCompare(a);
// }
// strar.sort(f1);
// console.log(strar);

// sort( CompratorFunction -> it should always return number negative , 0 or posive)

// arr.sort() -> // decreasing order me sort karo 

// a, b
// if (a < b) return -1;
// else
//     return 1;


// if (b < a) {
//     return 1;
// }
// else {
//     return -1;
// }

// function compare(a, b) {
//     if (b < a) return -1;  // Return negative if b should come before a
//     if (b > a) return 1;   // Return positive if b should come after a
//     return 0;              // Return 0 if they are equal
// }


// a.localCompare(b) => a < b  true = -1, a === b = 0, a > b = 1
// b.localCompare(a)


// [{
//     name:1,
//     place:2
// },
//     {
//         name: 2,
//         place: 1
//     },
//     {
//         name: 3,
//         place: 4
//     }, {
//         name: 4,
//         place: 3
//     }]
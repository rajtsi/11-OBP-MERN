// //  includes -> 
// //  reverse
// //  concat   
// // let a=10;
// //  let b=a;

// let arr = [1, 2];

// let arr1 = arr; // creationg of reference not copying 


// // Copy is copying why there are categories inside copying
// let aarrr = [1, 2, 3, 5, [4, 5, 6]]; //-m1
// let a = [...aarrr] //- m2  [1,2,3,5, Reference of 5th element from array aarrr,9]
// let darr = structuredClone(aarrr); // [1,2,3,5, [4, 5, 6]]

// aarrr[4][2] = 9; // changing at m1
// aarrr[2] = 100;


// a.push(9);
// console.log(a);
// console.log(darr);

// shallow copy 
// Deep Copy 


// Exercide 

// Make an array with name a1 with elements from  1 to 100 
// then make anyother array with name a2 such that its similar to a1 then add 101 at the start of this array a2 such that it also insert an element at the begenining of a1  
// then make an array a3  such that its similar to a1 and pop last 50 element without disturbing a1 and a2 and
// at last print all 3 arrays



// let a1 = [];
// let i = 1;

// while (i < 101) {
//     a1.push(i);
//     i++;
// }
// let a2 = a1;
// a2.unshift(101);

// let a3 = [...a1];

// a3.splice(51);
// console.log(a1);
// console.log(a2);
// console.log(a3);

// let arr = [1, 2];



// let [a, b, c, d, e = 20] = arr;


// console.log(a, b, c, d, e);




// a = 1
// b = 2
// c = 4
let d = [5, 5, 5, 5, 5, 5, 5, 5, , 5, , 3, , , , , , , , 3, 2, 2, 2, 2];

// arr.flat(optional parameter)-> if extrast the elements from inner arrays and put in outer array in sequence default working depth is 1 and you can give Infinity to flat every nested array
// it filters out the empty elements
// let arr1 = d.flat();
// console.log(arr1);
// console.log(d.length - arr1.length);
















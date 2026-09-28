// let arr = [1, 4, 5, 61, 2222, 3, 3, 4, 5, 5, 5, 5];
// // A subarray is a contiguous, ordered part of an array where elements appear consecutively without any gaps or skipped items

// let subarrays = [];
// for (let i = 0; i < arr.length - 1; i++) {
//     let x = [];

//     for (let j = i; j < arr.length - 1; j++) {
//         x.push(arr[j]);// [1,4]
//         let n_x = structuredClone(x);
//         let subarraySum = sum(n_x);
//         subarrays.push(subarraySum);
//     }
// }
// console.log(subarrays);
// function sum(arr) {
//     let ss = 0;
//     for (let x of arr) {
//         ss += x;
//     }
//     return ss;
// }

// this was for creating all the possible subarrays of an array.

// [1,4,5,62,3,4]

// -> 1,3,4,4,5,62

// a-> 
// A-> 
// B->
// '0'->18 
// '1'-> 29


// The full form of ASCII is the American Standard Code for Information Interchange.
// Every charater have a corresponding numerical value which is called ASCII character code for that character

let k = 'ajakka2z34569 bapoaaihcv\]\';1fg;[pkoihaasd3rgzxcvijanfg';
// let lC = ' '.charCodeAt(0);
// console.log(k.charCodeAt(0), lC);

// let newStr = k.replace('z', 'XXlalalallaX');// find out the 1st occurence andreplace it 
let newStr = k.replaceAll('z', 'XXlalzlallaX');

// console.log(k);
// console.log(newStr);
// replaceAll()  // findout all the occurance and replace all of them 

// 'aaaaaaaaa'-> aa aa aa aa aa

// console.log(k);
// let splittedarray = k.split('a');
// console.log(splittedarray);
// let reMadeString = splittedarray.join('blalalalla');
// console.log(reMadeString);

let kk = '   akakkak lalalla     '; //str.charCodeAt(index)
// let trimmedArray = kk.trim();
// // console.log(trimmedArray);

// let ps = trimmedArray.padStart(100, 'aaalaananaxnannnnnnnnnnnxnnnnnnnanankakallllalallallalalananxananaaggagaggahaxgahagahagaagagggggggxz');
// console.log(ps);

// You have to print Charcode of each index in string kk 

// for (let i = 0; i < kk.length - 1; i++) {
//     console.log(kk.charCodeAt(i));
// }



let newStr1 = String.fromCharCode(65, 32, 32, 66);

console.log(newStr1);



let mys = 'amananazazzzxxxxnznaikkkkkkkakfaakajatahatx';
//-. > we have only of z and only one x find out the number of character in between them 

let zi = mys.indexOf('z');
let xi = mys.indexOf('x');
let numberOfel = zi - xi;
if (numberOfel < 0) {
    numberOfel = -numberOfel;
}
console.log(numberOfel - 1);


absbsbbsbsb

a
ab 
abs   
..  

b  
bs 
bsb 









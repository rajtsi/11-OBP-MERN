

// // // A string is called the string of chips

// // "chipschipschipschips"

// // str -> string of chips 


// // let  str='';
// // str+='chips'-> 


// // A string is a string of CHIPS if it is a string formed by concatinating "chips" a positive number of times to an empty string.For example "chips" and "chipschips" are string of CHIPS whereas "chipsch" and "random" are not.Find out minimum number of moves required to make a given string S into a string of CHIPS.In a single move you can set any character of string to any character.

// "chips"

// let str = 'chips'; // i

// let s = 'dhipsco'   // ans+=1=ans=2 4 // j
// let ans=0;
// for (let i = 0, j = 0; j < s.length; j++) {
//     if(s[j]!==str[i])
//     {
//         ans++;
//     }
//     i++;
//     if(i=== str.length)
//     {
//         i=0;
//     }
//     // i = i%5

// }




//  2 3 4 5 6 7 8 9 




let obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
}






// Implement the findPath method, which takes an object and a string representing a path of keys separated by dots.It should return the value at the specified path inside the object if it exists, otherwise return undefined.




a.b.c
let s = 'a.b.l.k.l.p'.split('.');


// if the answere you are returning is an object then insert a new key  Name and out you r name as value; 


// Implement the findPath method, which takes an object and a string representing a path of keys separated by dots.It should return the value at the specified path inside the object 
// 1 - if it exists and its of type Object add a New key in that "Name"  and assign its values as your Name 
// if its not of type object do not add key
// 2- Return the result as the final value of that path 


const list = [
    {
        Name: "Gita",
        Age: 10
    },
    {
        Name: "rita",
        Age: 21
    },
    {
        Name: "pita",
        Age: 12
    },
    {
        Name: "sita",
        Age: 50
    },
    {
        Name: "pGita",
        Age: 27
    }, {
        Name: "kGita",
        Age: 100
    }

];


// 
smallest: "XYZ"
Largest: "ABC"

let sma = Infinity;
let bigest = -Infinity;
let samname = '';
let bigestName = '';

for (let i = 0; i < list.length; i++) {

    if (list[i].Age > bigest) {
        bigest = list[i].Age
        bigestName = list[i].Name;
    }


}




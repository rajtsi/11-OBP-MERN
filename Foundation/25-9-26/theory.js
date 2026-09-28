
// let str = 'Rajat '; // string is immutable you can no chaneg the content of a string inplace
// let len = str.length;
// let str1 = '';

// for (let i = 0; i < len; i++) {
//     console.log(str[i]);
//     if (i == 1) {
//         str1 += 'R';
//     }
//     else {
//         str1 += str[i];
//     }
// }

// console.log(str1);



// let Name = [4, 8, 9, [8, 9]];

// let welcomestr= "Welcome to the CLass " + Name + " Happy Learing";
// string Interpolation or Tepmlate Literals

// let welcomestr = `Welcome to the CLass ${Name} Happy Learing`;
// console.log(welcomestr);


// [1, ...  ... 100]
// {
//     console.log(`This number is ${arr[i]} ianan ${} mmama ${} ${}`)
// }


// ith character of an string NameofString[i]

// let str1 = "Rajat";
// let str2 = "Singh";
// let str3 = str1 + str2 + ' ' + '      ';

// console.log(str3.charAt(5));



// const lowerCaseAlpha = "abcdefghijklmnopqrstuvwxyz          lo";

// // if taht char if vowel print its vowel otherwise print Consonent'

// let strlen = lowerCaseAlpha.length;

// for (let i = 0; i < strlen; i++) {
//     let ch = lowerCaseAlpha.charAt(i);
//     if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
//         console.log("Vowel");
//     }
//     else {
//         console.log("Consonent");
//     }
// }

// function checker(ch) {
//     if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
//         return "Vowel";
//     }
//     else {
//         return "Consonent";
//     }

// }

// for (let x of lowerCaseAlpha) {
//     console.log(x);



// }


// let arr = [10, 20, 30];
// console.log(arr.indexOf(20, 1))


const lowerCaseAlpha = "abcdefghijLAJAJAJJklabcmnaaopqrstuavwxyz          lo";
// // console.log(lowerCaseAlpha.lastIndexOf('km',));


// console.log(lowerCaseAlpha.indexOf('aa',));

// console.log(lowerCaseAlpha.includes('abk', 0))

// console.log(lowerCaseAlpha.startsWith('abc'));
// console.log(lowerCaseAlpha.toLocaleUpperCase());

// console.log(lowerCaseAlpha.toLocaleLowerCase());

// // -> string addition and we have a number -> string

// // // string -> 1.03j
// // // '1.0233'-a
// // parseInt
// // let k = parseFloat('1.23f');
// // console.log(k);

// String(123)
// let k = Boolean(NaN);
// console.log(k);

let str = 'raJaqajajjajajjajaJJJAALAAKKAKt';


let str1 = str.slice(0, str.length - 1);
let str2 = str.slice(str.length - 1);

let str3 = str1.toLowerCase() + str2.toUpperCase();

console.log(str3);








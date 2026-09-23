// copy type in array





let arr1 = [1, 2, 3];

let arr2 = arr1; // its making a new reference variable for same array, both the names will point to same srray in memory.-> so if you are changing or updating anything in one it willl reflect with other name as well
arr1.push(9);

arr2.shift();
console.log(arr1);
console.log(arr2);


let a = 20;
let b = a;
b++;
console.log(a, b);


let combinedrarr = [1, 'a', null, undefined, '', 1.2, 'ajajaj', [1, 2, 3, 4]];
 let scopy = 
console.log(combinedrarr);
combinedrarr[1] = '-----';



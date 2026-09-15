// 1490901 /100 ->  14909 M

// 1000 -> Q-> KM
// Remaining M


// ->cm  -> 01

// 1M -> 100 CM



// 42/30

// =1 Month
// 12 Days



// 1 M= 100 CM

// 1KM = 1000 M;



// let x = 189;

// let lCm = x % 100;
// console.log(lCm);

// let m = Math.floor(x / 100);

// let lm = m%1000;

// let km = Math.floor(m/1000);



// 10 Months= 1Year
// 30 Days= Months
// 300 

// 1000 -> 300 -> 3 sal + 100 din   -> 30 30, 30 

// let x = 1000; -> Days

// 300
// 1 Year
// 3 Days


// Description:In a fictional world, the calendar system differs from Earth.A single Month has exactly 30 Days.A single Year has exactly 10 Months(which means a Year is exactly 300 Days).Write a JavaScript program that takes a variable totalDays and converts it into the exact number of Years, Months, and Days.


// 1512/ 30= 
// 1512%30 


let x = 1000;

let sal = Math.floor(x / 300);

let remeaintingDays = x % 300;
let month = Math.floor(remeaintingDays / 30);
let days = remeaintingDays % 30;
console.log(sal, month, days);
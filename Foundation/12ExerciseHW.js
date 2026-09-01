const str = "Dheeraj";
let a = 10;
let b = 40;


b *= a;//400
b %= 10;//0
console.log(b);// 0 correct 
b /= 1;//0
b += 50;//50
console.log(a);//10

b += 0;//50
b = a;//b=10;, a=10;

console.log(b);//10


b = (a + 10) + a % 20 + b * 9; // a+10+10+90 =120

b -= 8; 112
console.log(b * a);//1120 //1120


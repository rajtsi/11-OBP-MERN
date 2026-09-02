let a;

console.log(!a); //true
let a1 = null;
console.log(a1); //null 
console.log(!!a1); // false
a1 = '';// falsy
console.log(a || '10'); // 10
console.log(!'false'); // false
console.log('false' && true); // true
let b = a1 || '0' && '}}}}' && !null; //  a1 || '0' && '}}}}' && true -> a1 || '}}}}' && true -> a1 || true-> true
console.log(b); //true
console.log('600' - 10);// 590
console.log('600' + '10');// '60010'
console.log('600' / 10); //60
console.log(!'Rajat'); // false
let c = 900;
console.log(900 % 9);  //0
console.log(0 && "Singh"); //0





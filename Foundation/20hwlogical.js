let a;
let b = null;
let c = "10";     // let k=""= !k=true
let d = 5;
let e = "";
let f = "0";

console.log(!a || b || e || c); //  true || b|| e || c -> true

console.log(!(c == 10));   // false
console.log(!!(c === 10));  // false
console.log(!(!e));   // //false

console.log(c + d); // 105
console.log(c - d); // 5
console.log(c * d); // 50 

console.log(c == d + 5);  //  c == 10 > // true
console.log(c === d + 5); // false

let x = !a && (b || e) || d;  //  !a && false || d -> true && false || d -> false || d -> 5 
console.log(x); // 5

let y = c && d && !e && 100; // c && d && true && 100 ->  100
console.log(y);  // 100 

let z = !c || e || (d && "JS"); // '' || "" || "JS"  -> "JS"
console.log(z);  //JS

console.log(!(10 && "Hello" && 0)); // true

console.log(!!(0 || "" || null || "JavaScript")); // true

console.log(!("false" && false) || !!"0"); // true

console.log((c > d) && !(d > c));  // c = '10', d=5  // true

console.log((c == 10) && (d !== "5") || !e); // true  && true || true   // true

console.log((c === "10" || d > 10) && !b);  // (true || false) && !b -> true && !b-> // true

console.log("20" - 5 + "10"); //  '15' + '10' ->//  1510

console.log("20" + '5' - 10); // '205' - 10 // Number(195)

console.log(!("10" - 10) || ("5" * 2 === 10)); //  true 

console.log(!!("5" + 5) && !(5 === "5")); // true || true // true

console.log((!a && !b) || (!e && c)); // (true && true) || (true && '10')-> true || '10' -> //true

console.log(!(a || b) && (c && d)); //  !(false) && (5) -> true && 5-> // 5

console.log(!c && d || e && "Hello"); // false && 5 || "" && "Hellow" -> false || "" //  ""

console.log((c && !e) || (b && d) || !f); // (10 && true) || (false) || false  // true 

console.log(!(c == "10") || (d < c && !!e)); // false || (true && false) // false


let a = 10;

myAge(3);
// func(a, m); ->
function myAge(l) {
    let k = l;
    return (2 * l);
}

var func = function (a, b) {
    console.log("Yes we were able to use function defined in GEC in side a function", myAge(10));
    console.log("Yes we were able to use variable defined in GEC in side a function", m);
    
    console.log(k);
    return 10;

};



func(10, 20);
var m = 100;

// IN GEC MEMORY Creation Phase 
// a will get memory but no value will be assigned and can not be used before initilisation 

// m will get the memory and will get a value undefined and can be used before assignment or initilisation due to memory crearion 

// myage -> it will get memory and defination of function will be assigned at that memory space 

// func is a variable made using var will get the memory and will get a value undefined and can be used before assignment or initilisation due to memory crearion 






// console.log(m);


// //console.log(k);


// //console.log(func(10, 89));
// //myAge(30);

// var m = "Accio";

// func = function () {
//     return 0;
// };


// parameters - ?
//     arguments - ?







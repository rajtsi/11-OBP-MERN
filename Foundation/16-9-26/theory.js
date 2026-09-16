// fuction -> some thing like a machine in Javascript 
// // function NameofThe function ( a, b, c)-> parameters and these are just placeholder
// {

// }


// //functionName(a,b,c) // x,y,z are arguments 

// // return ;


// function add(a, b) {
//     return a + b;
// }

// add(10, 20);// calling or invocation



// function Name(a, b) {// this way of making a function is called function declaration



// }

// // there is another way of making a function that way is called function expression 


// const divTest =
//     function (a, b) { //this way of making a function is called function expression



//     };

// divTest = function (x) {
//     console.log(x);
// }

// divTest(40, 69);


// const a = function (a) {
//     console.log(a);
//     return 10;
// }

// console.log(typeof a);

// let b = a(20);
// console.log(b);


// GEC-> Global Execuation Context


// when Javascript Run time Environment Node tries to run a file it creaet a envornmet for this file to be execuated called -> GLobal Execuation Context 

// So thare are 2 Main parts of Global Execuation Context

//1 - Memory creation Phase
//2 - Execution Phase


// var when used for making normal variable 
//- We can access it before the line of making and assigning value var a=10;var a;
// a=10
// - it contains value undefined before the line of assignment  
// the actual value will be assigned when we hit the line of assignment
// we can reassign it like let
// We can redeclare variabel with sam,e name when made using var keywaord unlike  let and const 

// when made a function using function declaration  
//  we can acess this function before the like of creation
// and it will work properly fine 
// this is happening due to memory creation phase in Global execuation context

// when made a function using function expression // let, const, var
// if used var for making then you can access var before like of declaration but its value wil be undefined so if you truy to treat it a function you will get an error , you can tyest it just just printing taht var name or type of var name 
// if made using let or const you can not access this varaible before the line of defination 



// 1 -> console.log(add);

//    ..
//    ..
// 200 ->  var add = function (a, b, c) {
//     return a + b + c;
// }

// add();
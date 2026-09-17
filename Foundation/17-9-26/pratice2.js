

//make a function1 using function expression 
//then define a function2 using declaration inside function1 and then call that same function1 inside function1

//function1-> it will take 2 values x and y 

//function2 will take a varaibel l and will reuturn square of l

// let pp= function2(l);

//and will return x*x*x*x  + y  


let function1 = function (x, y) {
    let squ = function2(x);
    function function2(l) {
        return l * l;
    }
    return function2(function2(x)) + y;
}


function2(4);
// make a funtion that take an integer number as input and print and then return true if its divisible by both 3 and 7 

function divTest(n) {
    if (n % 3 === 0 && n % 7 === 0) {
        console.log(true);
        return true;
    }
    else {
        console.log(false);
        return false;

    }


}

divTest(21);


const res = divTest(20);
let a = 9;

if (res) {
    a *= a;
}
else {
    a *= 2;
}

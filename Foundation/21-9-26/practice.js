
// let AtoZ = [];
// //let val = AtoZ.push('z', 'a', 'alaala');
// // Push returns numw lenght after adding element at the end of the array in sequense
// console.log("array after push ", AtoZ);
// let ret = AtoZ.pop();
// console.log("val returned by pop", ret);
// console.log("array after  pop ", AtoZ);

// ret = AtoZ.pop();
// console.log("val returned by pop", ret);
// console.log("array after  pop ", AtoZ);



// for (let aa of AtoZ) {  // [1,2,3,4,5,6] => aa=AtoZ[0]; aa=20; 
//     console.log(aa);
//     aa = 20;
//     console.log(aa);
// }


// for (let aa of AtoZ) {
//     console.log(aa);
// }



// push / pop → end
// shift / unshift → beginning

// [1, 2, ... 100];


let arr = [];
// console.log(arr);
// arr = 10;
// console.log(arr);
// console.log(arr[0]);

for (let i = 1; i <= 100; i++) {
    arr.push(i);
}

console.log(arr);
//  the array that you already have at this point , from that array you are supposed to take out one element at a time and check if that number if divisible by 3 if yes push it to a new array with naem arr3 and do this untill your arr is empty;


for (let i = arr.length; i > 0; i--) {
    let n = arr.pop();
    if (n % 3 === 0) {

    }
    else {

    }

}
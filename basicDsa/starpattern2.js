//    ****
//     ****
//      ****
//       ****




// for (let i = 0; i < 4; i++) {
//     let str = '';
//     for (let j = 0; j < i; j++) {
//         str += ' ';
//     }

//     console.log(str);
// }

//        *  i=0 , k=0
//      *   * i=1 , k=2
//    *       *  i=2 k= 4
//  *           * i=3 k = 6 
//    *       * i=4  k=4
//      *   *   i=5 k=2
//        *     i=6 k=0





let m = 11;
let n = 2 * m - 1;
let mid = Math.floor(n / 2);
let h = Math.floor(m / 2);

for (let i = 0, k = 0; i < m; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
        if (j === (mid + k) || j === (mid - k)) {
            str += '*';
        }
        else {
            str += ' ';
        }
    }
    console.log(str);
    if (i >= h) {
        k -= 2;
    }
    else {
        k += 2;
    }
}




// 2
// 33
// 444
// 5555
// 5555
// 444
// 33
// 2


// for (let i = 2; i < 6; i++) {
//     let str = '';
//     for (let j = 0; j < i - 1; j++) {
//         str += i;
//     }
//     console.log(str);
// }

// for (let i = 5; i > 1; i--) {
//     let str = '';
//     for (let j = 0; j < i - 1; j++) {
//         str += i;
//     }
//     console.log(str);
// }


// // 10 * 9 * 8 * 7
// // 6 * 5 * 4
// // 3 * 2
// // 1


// let p = 10;

// for (let i = 0; i < n && p > 0; i++) {
//     let str = '';
//     for (let j = 0; j < 4 - i; j++) {
//         if (j != 0) {
//             str += '*'
//         }
//         str += p;
//         p -= 1;


//     }
//     console.log(str);
// }


// 6 * 6 * 6 * 6
// 5 * 5 * 5
// 4 * 4
// 3
// 3
// 4 * 4
// 5 * 5 * 5
// 6 * 6 * 6 * 6

for (let i = 0; i < 4; i++) {
    let str = '';
    for (let j = 0; j < 4 - i; j++) {
        if (j !== 0) {
            str += '*';
        }
        str += (6 - i);
    }
    console.log(str);

}

for (let i = 0; i < 4; i++) {
    let str = '';
    for (let j = 0; j < i + 1; j++) {

        if (j !== 0) str += '*';
        str += (i + 3);

    }
    console.log(str);
}


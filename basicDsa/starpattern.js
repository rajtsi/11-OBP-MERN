
// * //i=4
// * * //i=3
// * * * //i=2
// * * * *  // i=1
// * * * * * // i=0


// for (let i = 0; i < 5; i++) {
//     let str = '';//* 

//     for (let j = 0; j < 5-i; j++) {
//         str += '* ';
//     }

//     console.log(str);
// }


// * * * * * * * * //  i
//   * * * * * *
//     * * * * 
//       * *
//        *  


let str = '';
for (let i = 0; i < 15; i++) {

    if (i == 7) {
        str += '*';
    }
    else
        str += ' ';
}
console.log(str);

for (let i = 3; i >= 0; i--) { //i=4
    let str = '';
    for (let j = 0; j < 8; j++) {
        if (j >= i && j < 8 - i) {
            //j = 0 i = 4
            str += "* ";
        }
        else {
            str += "  ";
        }

    }
    console.log(str);
}

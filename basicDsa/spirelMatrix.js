

let arr = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];


// 1 2 3 6 9 8 7 4 5 

let n = arr.length; // 3
let m = arr[0].length;// 3

let j = 0;
for (j; j < m - 1; j++) {
    console.log(arr[0][j]);
}
let i = 0;
for (i; i < n - 1; i++) {
    console.log(arr[i][j]);
}

for (j; j > 0; j--) {
    console.log(arr[i][j]);
}

for (i; i > 0; i--) {
    console.log(arr[i][j]);
}





// /**
//  * @param {number[][]} matrix
//  * @return {number[]}
//  */
// var spiralOrder = function (arr) {
//     let ans = [];
//     let n = arr.length; // 3
//     let m = arr[0].length;// 3

//     let i1 = 0, i2 = n - 1, j1 = 0, j2 = m - 1;
//     for (i1, j1; i1 < i2 && j1 < j2; i1++, j1++, i2--, j2--) {

//         let i = i1, j = j1;

//         for (j; j < j2; j++) {
//             console.log(arr[i][j]);
//             ans.push(arr[i][j]);
//         }

//         for (i; i < i2; i++) {
//             console.log(arr[i][j]);
//             ans.push(arr[i][j]);
//         }

//         for (j; j > j1; j--) {
//             console.log(arr[i][j]);
//             ans.push(arr[i][j]);
//         }

//         for (i; i > i1; i--) {
//             console.log(arr[i][j]);
//             ans.push(arr[i][j]);
//         }

//     }


//     if (j1 === j2) {
//         for (i1; i1 <= i2; i1++) {
//             console.log(arr[i1][j1]);
//             ans.push(arr[i1][j1]);
//         }
//     }

//     if (i1 === i2) {
//         for (j1; j1 <= j2; j1++) {
//             console.log(arr[i1][j1]);
//             ans.push(arr[i1][j1]);
//         }
//     }

//     return ans;

// };


function sum(a,b)
{

    a*=2;
    b*2;
    return a+b;


}
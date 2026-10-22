// /**
//  * @param {number[][]} matrix
//  * @return {void} Do not return anything, modify matrix in-place instead.
//  */
// var rotate = function (mat) {

//     // transpose  

//     let n = mat.length;
//     let m = mat[0].length;

//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < i; j++) {
//             let temp = mat[i][j];
//             mat[i][j] = mat[j][i];
//             mat[j][i] = temp;

//         }
//     }

//     for (let i = 0; i < n; i++) {
//         for (let j = 0, k = m - 1; j < k; j++, k--) {
//             let temp = mat[i][j];
//             mat[i][j] = mat[i][k]
//             mat[i][k] = temp;

//         }
//     }

// };
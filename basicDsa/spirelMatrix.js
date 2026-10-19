

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



let arr = [
    [1, 2585], // 1+2585+5+0
    [1, 25, 9292, 0], // 1+25+9292+0
    [14, 285, 599292, 1],
    [1, 285, 5292, 0]
]

//[sumrow1, sumrow2, sumrow3, sumrow4 ]

// sum: 10

let ans=[];
let count = 0;
for (let i = 0; i < arr.length; i++) {
   let sum=0
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
        ans.push(sum);
    }
}

// console.log(sum);

// console.log("average ", sum / count);

// arr[0][0]  arr[0][1] arr[0][2]
// arr[1][0]  arr[1][1]  arr[1][2]
// arr[2][0]   arr[2][1]  arr[2][2]


let n = arr.length;
let m = arr[0].length;

for (let i = m-1; i >-1; i--) {
    for (j = n-1; j > -1; j--) {
        console.log(arr[j][i]);
    }
}
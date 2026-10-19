let arr = [
    [1, 4, 3, 4],   [4, 3, 4, 1]
    [2, 5, 6, 5],   [5 ,6 ,5, 2 ] 
    [7, 8, 9, 5],   [5, 9, 8,  7 ]
    [7, 8, 9, 5]    [5 , 9, 8, 7 ]
]
for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr[i].length; j++) {
        //console.log(i, j);
        let dummy = arr[i][j];
        arr[i][j] = arr[j][i];
        arr[j][i] = dummy;
    }
}

arr[0][0]  a[0][1]    a[0][2]   a[0][3]  a[0][4]


j=0 j=4   j=1 j=3 j=2 j=2
console.log(arr);
// let sum=0;
// if(i===j)
// {
//     sum1+=arr[i][j]
// }


// if (i === m-1-j) { 2, 2-0 
//     sum1 += arr[i][j]
// }


// arr[i][j]-> [j][i]
// [j][i]-> [i][j]


// [ 1,2, 3, 4,5, 6,7]-> 
// j=0 k=n-1
// arr[i][j]  arr[i][k]
// j++, k--
// j<k

for(let i=0;i<arr.length;i++)
{
    
    arr[i]


}
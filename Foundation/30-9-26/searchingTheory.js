
// [1, 2, 3, 3, 4, 4, 4, 4, 5, 6, 6, 7, 7, 5, 6, 6, 6, 6, 'Rajat', 6, 6, 6, 6, 6, , 6, 6, 6, 6, 9, 6, 6, 6, 6, 6]


let str = "abcnananananannanaaaananannannankakakakaa";
let search = 'aaa'
let count = 0;
function searchStr(str, search) {
    for (let i = 0; i < str.length - 2; i++) {
        let newStr = str.substring(i, i + 3); // 
        console.log(newStr);
        if (search === newStr) {
            return i;
        }
    }
    return false;
}

console.log(searchStr(str, search));


// let arr = [1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 44, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
// // search if a 
// let subarrray = [3, 4] ///exist in arr or not

// for (let i = 0; i < arr.length - 1; i++) {

//     (arr[i] === subarrray[0] && 
//     arr[i + 1] === subarrray[1])
// }

// 1,2,3,4,5,6,7,8
// nested if else
// nested object    


// [
//     {

//     },

//     {
//     },

//     {

//     }

// ]

// {
//     name:
//     class: {

//     }
// }

// nested -> item inside item
// nested -> loop inside loop

// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         do {

//         } while ()
//     }
// }




// [6, 5, 4, 3, 2, 1] i=0
//                     j=i




// // 6  // 5 // 


// for(let i=0;i<n;i++)
// {

//     for(let j=n-1;j>-1;j--)
//     {

//     }
// }

// ['rajat', 'rajat1', 'rajat2', 'rajat3', 'rajat4', 'rajat5', 'rajat6']


// let arr = [1, 2, 3, 4, 5] // process.stdout.write()

// // 1
// // 1 2
// // 1 2 3
// // 2
// // 2 3
// // 3

// let n = arr.length;
// for (let i = 0; i < n; i++) {
//     let sarr = '';
//     let j = i;
//     while (j < n) {
//         sarr += arr[j];
//         sarr += ' ';
//         console.log(sarr);
//         j++;
//     }

// }


// let str = 'abcde';
// let n = str.length;
// e
// ed 
// edc 
// ..
// d 
// dc


// for (let i = n - 1; i > -1; i--) {
//     let str1 = '';
//     for (let j = i; j > -1; j--) {
//         str1 += str[j];
//         console.log(str1);
//     }

// }

// 1 2 3






// [ [] [] [] [] []]
let arr = [1, 2, 3, 4];

let arrofsubarr = [];//[1], [1,2]]
let n = arr.length;


for (let i = 0; i < n; i++) {
    let curarr = [];//[1]

    for (let j = i; j < n; j++) {
        curarr.push(arr[j]);
        let mydeepcopy = structuredClone(curarr);
        arrofsubarr.push(mydeepcopy); // if we can find a solution for seperating references then we can push the seperate reference so that next push does not change teh olders pushes

    }
}

console.log(arrofsubarr);





// [[1],[1,2],[1,2,3],[2],[2,3]]

// let arr2 = [1, 2, 3];
// let arr1 = structuredClone(arr2);
// arr1.push(9);
subarrysum= []
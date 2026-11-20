
// // let arr=[8,9,181,191,1911,69,0,-1,-20,888,'rajat'];


// // let res =  arr.map(fn);

// // function fn(element)
// // {
// //     let mappedV=0;
// //     if(typeof (element)==='string')return element;
// //     if(element%2===0)
// //     {
// //      mappedV=element/2;
// //     }
// //     else
// //     {
// //    mappedV=2*element;
// //     }
// //     return  mappedV;
// // }

// // console.log(res);

// // console.log(arr);
// // const people = [
// //   { name: "Alice Smith", age: 28 },
// //   { name: "Bob Jones", age: 34 },
// //   { name: "Charlie Brown", age: 22 },
// //   { name: "Diana Prince", age: 31 },
// //   { name: "Evan Wright", age: 45 }
// // ];

// // [28,34,22,31,45]

// const students = [
//   { name: "Aman", marks: [85, 90, 78] },
//   { name: "Riya", marks: [92, 88, 95] },
//   { name: "Karan", marks: [35, 40, 30] },
//   { name: "Sneha", marks: [70, 75, 80] }
// ];

// console.log(students.map(fn));


// [
//   {
//     name: "Aman",
//     total: 253,
//     percentage: 84.33,
//     result: "Pass"
//   },
//   {
//     name: "Riya",
//     total: 275,
//     percentage: 91.67,
//     result: "Pass"
//   },
//   {
//     name: "Karan",
//     total: 105,
//     percentage: 35,
//     result: "Fail"
//   },
//   {
//     name: "Sneha",
//     total: 225,
//     percentage: 75,
//     result: "Pass"
//   }
// ];

// function fn(element)
// {
//     let finaalObj={};
//     finaalObj.name=element.name;
//     let tot=0;
//     let result='Pass';
//     element.marks.forEach(
//         function (element){
//              tot+=element; 
//              if(element<35)
//                 result='fail';
//             }
//     );
//     finaalObj.total= tot;
//     finaalObj.percentage=tot/300;
//     finaalObj.result=result;
//      return finaalObj;
// }

let arr1=[{k:1,p:2},{l:0},{ww:10}];

console.log(arr1.reduce(f1,{}));

function f1(acc, currV)
{
    for(let key in currV)
    {
        acc[key]=currV[key]
    }
    //console.log(currV);
    return acc;
}


// let k =
// {
//     key: value,
// }
// k.abc={
// l:1,
// m:2};
// let abc='j'
// k[abc]=10;
// delete k[abc];

// Object.keys(objectName);
// Object.values(objectName);


// let k1 = keyarr.abc["m"] 
//[{},{},{}]


// Object Destructuring
// let [a=10,b=10, ...add]=[1]// array destructuring 

// 
// let k = {
//     a: 1,
//     b: 2,
//     c: [1, 2, 3]
// }

// let { a, b, ...rest } = k;
// console.log(a, rest);
// let p = { ...k };// shallow copy

// let q = structuredClone(k);

// p.c.push("rajat")

// console.log(p, k, q);


// make an object  where yo can decide any key at least 5 
// print the number of keys using code not by counting yourself 
// Instructore: "Rajat"
// make a copy of this object 
// then delete the key Instructore from the new copy and then print the both old and new copy you both printed objects should be different

let obj =
{
    a: { z: 1, y: 2 },
    b: 20,
    c: 20,
    d: 25,
    f: [1, 2, 4, 5, 56]
}
let neWP = { ...structuredClone(obj), a: 10 }; // sequense matters
console.log(neWP);
// console.log(Object.keys(obj).length);
// obj.Instructore = "Rajat"; // obj["Instructore"]="Rajat";
// let copyObj = structuredClone(obj);
// delete copyObj["Instructore"];
// obj.f = "Singh";
// console.log(obj, copyObj);










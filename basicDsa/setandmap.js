
//        Set                                      Map
//   data structure                          data structure
//   stores unique values                   map stores values in kay value form with keys  // reference     -                                                                                check in array and object
//   size                                     size
//   add(element)                             set(key, value)
//   has()                                    has() // boolean returns
//   delete ()                                delete () // delete value in set and key in map
//                                            get(key)

// range based loop                             




//   let arr=[1,2];
//   let arr1=arr;


let set1 = new Set([1, 23, 3, 3, 3]);

//   for(let i=0;i<set1.size;i++)
//   {
//     console.log(set1[i]);
//   }

for (let x of set1) {
    console.log(x);
}


let map1 = new Map();
map1.set('a', 10); //    a->10

map1.set('b', 10); //    a->10
map1.set('b', 10); //    a->10

// for (let key of map1.entries()) {
//     console.log(key[0]);
// }

console.log(map1.has('c'));


map1.set(2,value1);

(1,2)
(2,2)
(3,2)

[2]


// let arr=[ [1,8],[9,9],[10,4],[-1,90],[2,8],[9,8] ];
// key as y coordinate and value as he number of points on with y as equal to key;
// {
//     8-> 
// }


let arr = [[1, 2], [2, 2], [3, 4], [9, 0], [2, 2], [5, 2], [7, 4], [0, 0]];

let map1 = new Map();

for (let el of arr) {
    let x = el[0]
    let y = el[1]

    if (!map1.get(y)) {
        map1.set(y, [x]);

    }
    else {

        map1.get(y).push(x);

    }

}

console.log(map1);
// 
O(1);

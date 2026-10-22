let arr = [1, 8181, 19181, 171661, 171881, 353, 2, 3, 363, 252, 2];

function cmp(a, b) {
    return b - a;
}

arr.sort(cmp);
//console.log(arr);

let n = arr.length;
let search = 171881;

let start = 0, end = n - 1;

for (start, end; start <= end;) {

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === search) {
        console.log(mid);
        break;
    }
    if (search < arr[mid]) {
        end = mid - 1;
        start = mid + 1;
    }
    else {

        end = mid - 1;
    }

}



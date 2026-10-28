let arr = [1, 248, 383, 3933932, 1, 3933];

function bubblesort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let swap = false;

        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swap = true;
            }
        }

        if (!swap) return arr;
    }

    return arr;
}


// bubblesort(arr);

console.log(arr);


function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let ind = -1;
        let minvalue = Infinity;

        for (let j = i; j < n; j++) {
            if (arr[j] < minvalue) {
                minvalue = arr[j];
                ind = j;
            }
        }
        arr[ind] = arr[i];
        arr[i] = minvalue;

    }
  return arr;
}


selectionSort(arr);


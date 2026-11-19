let arr=[2,67,777,3443,68,4,78,45,677,344566,21,3,49,56];



function makepivotArr(i,j,arr){
    let pivotIdx=j;

    let pivot=arr[pivotIdx];       //56

    j=j-1;
    while(i<j){

        if(arr[i]<pivot){
            i++;
        }
        else{
            [arr[i],arr[j]]=[arr[j],arr[i]];
            j--;
        }
    }
     if(arr[i]<pivot)
     {
        i++;
     }
    
    [arr[i],arr[pivotIdx]]=[arr[pivotIdx],arr[i]];

    return i;
}



// makepivotArr(0,arr.length-1,arr);
// console.log(arr);
function quicksort(i,j,arr){   [1,2]
    if(i>=j){
        return;
    }
    let pivotind=makepivotArr(i,j,arr);

    quicksort(i, pivotind-1, arr);
    quicksort(pivotind+1, j, arr);

}
quicksort(0, arr.length-1, arr);
console.log(arr);
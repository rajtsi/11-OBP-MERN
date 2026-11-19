
let arr1=[9,191,181,2,3,471,181,19101,37373,45,27,38,288,59,30,10,0,90];

function makePArr(i,j,arr)
{  
   let pivot= arr[j];
   let i1=i,j1=j-1;
   while(i1<j1)
   {if(arr[i1]<pivot)
    {  i1++;
    }
    else
    {
       let temp=arr[i1];
       arr[i1]=arr[j1];
       arr[j1]=temp;
       j1--;
    }
   }

   if(arr[i1]<pivot)
   {
     i1++;
   }

       let temp=arr[i1];
       arr[i1]=arr[j];
       arr[j]=temp;
    console.log(arr);
     return i1;
}

function quicksort(i,j,arr)
{
   let myp = makePArr(i,j,arr);
   if(i<myp-1)
      {
         quicksort(i,myp-1,arr);
      } 
   if(myp+1<j)
   {
      quicksort(myp+1,j,arr);
   }

   return arr;
}

console.log(quicksort(0,arr1.length-1,arr1));


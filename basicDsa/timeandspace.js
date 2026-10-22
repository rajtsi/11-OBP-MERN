
// time limit exceeded




let arr=[]// n
let n=arr.length;

let cpy=[];
let k=0;
for(let i=0;i<n;i++)
{
   sum+=arr[i]*arr[i];

   for(let j=0;j<i;j++)// 0 // 0,1 // 0,1,2 // 0,1,2,3 .....//    0,...n-1
   {
    cpy.push(k++);
   }

}
0+2+3+4+5..     n-1=     (n*(n+1))/2 -> ((n-1)*n-1+1)/2=> (n*(n-1))/2   n*n/2 -n/2

O(n*n)// time complexity
O(n)// space complexity




//    - Time complexity: How the amount of computation grows with input size.
// - Space complexity: How the amount of memory(extra and maximum used instance) used by an algorithm grows with input size.

// ## Time complexity

// The rate at which the number of computational steps performed by an algorithm grows as the input size grows.

// ## Space complexity

// The rate at which the Extra memory required by an algorithm grows as the input size grows.

// Space complexity: The amount of  Extra memory an solution requires as a function of the input size(n),

//    considering the maximum memory used at any point during its execution.



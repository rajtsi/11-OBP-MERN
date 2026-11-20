const people = [
  { name: "Alice Smith", age: 28 },
  { name: "Bob Jones", age: 34 },
  { name: "Charlie Brown", age: 22 },
  { name: "Diana Prince", age: 31 },
  { name: "Evan Wright", age: 45 }
];


let ans=people.filter(  f  );

function f(element)
{
   let v=false;
   if(element.age>30)v=true;
   return v;
}

console.log(ans);


// function calc(a,b,functionDef)
// {
//     functionDef(a,b);

// }

// functionDefs(i,j)
// {
//     return a-b
// }




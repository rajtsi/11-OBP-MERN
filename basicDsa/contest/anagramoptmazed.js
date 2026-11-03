
let arr=['cat','bat','ball','tac','act','tab'];

let myMap=new Map();

for(let i=0;i<arr.length;i++)
{

    let key = arr[i].split('').sort().join();   sortedArrayofi->[s1,s2];
    if(myMap.has(key))
    {
       let existingvalue=myMap.get(key);
       existingvalue.push(arr[i]);

    }
    else
    {
        myMap.set(key,[arr[i]]);
    }

}


let q=['cat','bat'];

for(let x of q)
{
    // x-> sored x-> check if sorted x exist as key in mymap -> if yes print the value corresponding to that key otherwise print -1;
   let sx=x.split('').sort().join();
    if(myMap.has(sx))
    {
        let res= myMap.get(xs);
        
    }
    else
    {
        console.log(-1);
    }
}

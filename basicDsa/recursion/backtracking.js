let target="ureached";

let pathstochosefrom='ahahuquahahaujarieachnnneeedureached';//its lenth n

function mybtfunction(i,target,pathstochosefrom,mystring)
{
    let n=pathstochosefrom.length;
    if(i>=n)return;
    // take
   let mytakestring = mystring  + pathstochosefrom[i];

       if(target===mytakestring)
       {

        console.log("i found teh way");
        return;
       }
      mybtfunction(i+1,target,pathstochosefrom,mytakestring);

    // note take
   let myNottakestring=mystring;
      mybtfunction(i+1,target,pathstochosefrom,myNottakestring);

    
}


let initials='';
mybtfunction(0,target,pathstochosefrom,initials);














let target="ureached";

let pathstochosefrom='ueeedreached';//its lenth n

function mybtfunction(i,target,pathstochosefrom,mystring,myind)
{
    let n=pathstochosefrom.length;
    if(i>=n)return 0;
    // take
   let mytakestring = mystring  + pathstochosefrom[i];
    console.log(mytakestring);
       if(target===mytakestring)
       {

        console.log("i found the way",myind);

       
        return 1;
       }

       if(mytakestring.length<target.length)
         mybtfunction(i+1,target,pathstochosefrom,mytakestring,myind+`+${i}`);
      
        
    // note take
      let myNottakestring=mystring;
      let myb1= mybtfunction(i+1,target,pathstochosefrom,myNottakestring,myind);

      

    
}


let initials='';
mybtfunction(0,target,pathstochosefrom,initials,'');
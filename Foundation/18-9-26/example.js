// define a function inside for loop  at the end of the loop // example 
//   for(...)
//   {
//     //... your code 

//     // your function defination
//   }



// then run the loop from 1 to 5 
// and print the day corresponding to number in week
//function will take a parameter and will print the day on th basic of the parameter value


for (let i = 1; i <= 5; i++) {
    checkDay(i);

    function checkDay(a) {
        switch (a) {
            case 1:
                console.log("Monday");
                break;
            case 5:
                return "tonday";
            case 2:
                return "wonday";
            case 3:
                return "tonday";
            case 4:
                return "fonday";

            default: return "Monday";
        }

    }
}



let weekDay = "Monday"//"Monday" -  "Sunday";
let printHoliday = true;

// see we have to check wahta the day assigned in weekDay 


switch (weekDay) {
    case "Monday":
        console.log("Monday");
    case "Tuesday":
        console.log("Tuesday");
    case "Wednesday":
        console.log("Wednesday");
    case "Thursday":
        console.log("Thursday");
    case "Friday":
        console.log("Friday");
    case "Saturday":
        console.log("its a holly day");
        if (printHoliday) { console.log("Saturday"); }
    case "Sunday":
        if (printHoliday) { console.log("Sunday"); }
        break;
    default:
        console.log("Not a valid Day");

}
// switch statement
const date = new Date("2023/06/14 10:15");
const day = date.getDay();

switch(day) {
    case 0: 
        console.log('Sunday');
        break;
    case 1: 
        console.log('Monday');
        break;
    case 2: 
        console.log('Tuesday');
        break;
    case 3: 
        console.log('Happy Wednessday😊');
        break;
    default: 
       console.log('Please enter a valid input');
}
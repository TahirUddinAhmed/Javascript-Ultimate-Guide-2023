let age = -19;

if(age > 0) {
    if(age > 18) {
        console.log("Yess, you're eligible");
    } else {
        console.log("Sorry, you can't go further");
    }
} else {
    console.log("Sorry, You enter a invalid age.")
}

// switch statement 
let a = 1;

switch(a) {
    case 1: 
       console.log("If you enter 1, this line of code will run");
       break;
    case 2: 
       console.log("If you enter 2, this line of code will run");
       break;
}


// ternary operator 
let marks = 20;
let result = marks > 30 ? "Pass" : "fail";

console.log("you are ", result);
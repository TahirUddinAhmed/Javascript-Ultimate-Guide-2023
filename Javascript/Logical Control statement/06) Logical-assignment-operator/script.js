// ||= assigns the right side value only if the left is a falsy value.

let a = false;

// if(!a) {
//     a = 11;
// }

// a = a || 10;
a ||= 10;

console.log(a);

// &&= assign the right side value only if the left is a truthy value.

// let b = false;
let b = 20;

// if(b) {
//     b = 35;
// }

// b = b && 40;
b &&= 41;

console.log(b);

// ternary operator
let age = 21;

// if statement
// if(age >= 18) {
//     console.log("You are an adult");
// } else {
//     console.log("you are a minor")
// }

// we can achieve the same thing using the ternary operator
age >= 18 ? console.log("You are an adult") : console.log("You are a minor");


// multiple statement 
const auth = true;
// let redirect;

// if(auth) {
//     alert("Welcome to the dashboard");
//     redirect = '/dashboard';
// } else {
//     alert("Access denied");
//     redirect = '/login';
// }

// using ternary operator
const redirect = auth ? (alert('Welcome to the dashboard'), '/dashboard') : (alert('Access denied'), '/login');

console.log(redirect);
const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// nesting array
// fruits.push(berries);

// console.log(fruits);

const n = [1, 4, 6, [11, 33, 22]];

// access nested array elements
// console.log(n[3][1]);

// concat array
let allFruits = fruits.concat(berries);

// console.log(allFruits);

// Spread Operator (...)
let x = [...fruits, ...berries]; // concat
x = [...fruits, berries]; // nesting
// console.log(x);

// Flatten array
let arr = [1, 2, [3, 5], 8, [4, 6], 9];
let flat = arr.flat();
console.log(flat);

// static methods on array objects

// let is_array = Array.isArray("hello"); // false 
let is_array = Array.isArray(fruits); // true 

// Array.from
// let arr_from = Array.from("tahir");
let arr_from = Array.from("7854122");

// Array.of
let a = 98;
let b = 12;
let c = 7;

let arr_of = Array.of(a, b, c);

console.log(arr_of);

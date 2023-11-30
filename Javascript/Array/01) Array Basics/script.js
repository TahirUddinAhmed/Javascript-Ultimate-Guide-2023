// Array Literal
const numbers = [45, 9, 12, 104, 333];

// console.log(numbers)

// Array Constructor
const fruits = new Array('Apple', 'Banana', 'Grape', 'mango');

// console.log(fruits);

// accessing elements of an array 
console.log(numbers[0]);
console.log(fruits[1]);

// change items inside an array
numbers[1] = 54;
fruits[2] = 'Strawberry'; 

console.log(numbers);
console.log(fruits);

// lenth of the array
let length = numbers.length;
length = fruits.length;
console.log(length);

// add items to the end of the array without using array method
fruits[fruits.length] = 'Blueberry';

console.log(fruits);



let str;

const name = 'Tahir Ahmed';
let age = 20;

// Templete Literals
// str = `Hello, My name is ${name} and I am ${age} years old`;


// console.log(str);

const str1 = new String("This is a new string");

// access value by key
console.log(str1[0]);
console.log(str1[1]);
console.log(str1[6]);

// string properties 
// console.log(str1.__proto__);

// uppercase and lowercase
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());


// console.log(str1, typeof str1);

// indexOf
console.log(str1.indexOf('n'));

// trim()
let a = '   hey, love';
a=a.trim();

// console.log(a);

// replace()
a = a.replace('love', 'sweetHeart');
console.log(a);

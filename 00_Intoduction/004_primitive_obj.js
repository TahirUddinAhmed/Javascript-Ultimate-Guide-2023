// primitive data types
let a = null; // null
let b = 365; // number
let c = true; // boolean
let d = BigInt("8615"); // BigInt
let e = "I am a string"; // String
let f = Symbol("Symbol"); // Symbol
let g = undefined; // undefined

console.log(a, b, c, d, e, f, g);
console.log(typeof(d)); // typeof() is used to check the data type
console.log(typeof(f));
console.log(typeof(b));


//Non-primitive data types - objects
const items = {
    "Mango" : false,
    "Banana" : 45,
    "Potato": 12,
    "Sugar" : undefined
}

console.log(items["Banana"]);

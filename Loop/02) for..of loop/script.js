// loop through array
const fruits = ['apple', 'banana', 'strawberry'];
const users = [
  {name: 'Tahir'},
  {name: 'Steve'},
  {name: 'Elon'}
];
// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// iterate the array using for..of loop
// for(const fruit of fruits) {
//     console.log(fruit);
// }

// iterate the array object using for..of loop
// for(const user of users) {
//     console.log(user);
// }

// Loop over strings
const str = 'Hello, world';

for(const letter of str) {
    console.log(letter)
}


// Loop over maps
const map = new Map();
map.set('name', 'john');
map.set('age', 30);

for(const [key, value] of map) {
    console.log(key, value);
}
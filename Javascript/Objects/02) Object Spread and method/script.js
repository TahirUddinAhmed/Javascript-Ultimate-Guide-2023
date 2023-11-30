// object constructor 
const toDo = new Object();

toDo.id = 1;
toDo.name = 'Buy Milk';
toDo.completed = false;

console.log(toDo);

// nested object
const person = {
    addr: {
        cordinate: {
            lat: 35.4754,
            lng: -89.7658
        }
    }
};

// accessing nested properties 
console.log(person.addr.cordinate.lng);


const obj1 = {a: 2, b: 3};
const obj2 = {c: 5, d: 1};

// another way to nesting objects
const obj3 = {obj1, obj2};

console.log(obj3);
console.log(obj3.obj1.a);

// combine objects  using spread operator
const obj4 = {...obj1, ...obj2};

console.log(obj4);

// object assign()
const obj5 = Object.assign({}, obj1, toDo);

console.log(obj5);


// Array of objects
const todos = [
    {id: 1, name: 'Buy food'},
    {id: 2, name: 'Reading books'},
    {id: 3, name: 'Creating the scription system'}
];

console.log(todos);
console.log(todos[2].name); // accessing properties

// object keys
const objKey = Object.keys(toDo);
// length of an objects
const length = Object.keys(toDo).length;
// object values
const values = Object.values(toDo);
// object entries
const entires = Object.entries(toDo);
// hasOwnProperty()
const has_own_property = toDo.hasOwnProperty('name');

console.log(objKey);
console.log(length);
console.log(values);
console.log(entires);
console.log(has_own_property);
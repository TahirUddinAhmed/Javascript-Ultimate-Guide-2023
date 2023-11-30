// values are store in stack
const name = 'John';
const age = 30;

let newName = name;
newName = 'Peter';
console.log(name, newName);


// Reference values are stored on the heap
const person = {
    name: 'Abdul',
    age: 33
};

const newPerson = person;
newPerson.name = 'Bulbul';
console.log(person, newPerson);
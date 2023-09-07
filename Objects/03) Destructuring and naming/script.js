const firstName = 'John';
const lastName = 'Doe';
const age = 30;

// const person = {
//     firstName: firstName,
//     lastName: lastName,
//     age: age
// }
const person = {
    firstName,
    lastName,
    age
}

// destructuring
const todo = {
    id: 1,
    name: 'Buy Milk',
    user: {
        u_name: 'John'
    }
}

const { 
    id, 
    name, 
    user:{u_name} 
} = todo;


// destructure arrays
const numbers = [23, 12, 4, 89, 11];

const [first, second, ...rest] = numbers;

console.log(first, second, rest)
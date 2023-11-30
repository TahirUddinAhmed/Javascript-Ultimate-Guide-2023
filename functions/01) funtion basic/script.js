function sayHello() {
    console.log("Hello, World");
}

sayHello();

function add(a, b) {
   return a + b;
}

const result = add(12, 13);


console.log(result);
console.log(add(5, 4));

// parameters and arguments
function registerUser(user) {
    return user + " is registered!";
}

console.log(registerUser('John'));

// default parameters
function greet(name = 'Bot') {
    return "Hello, " + name + "!";
}

console.log(greet("tahir"))


// Rest params
function sum(...numbers) {
    let total = 0;

    for(let i = 0; i <= numbers.length; i++) {
        total += i;
    }
    return total;
}

console.log(sum(1, 2, 3, 4));

// objects as params
function loginUser(user) {
    return `The user ${user.name} with the id ${user.id} is logged in`;
}

const user = {
    id: 1,
    name: 'Tahir'
};
const user2 = {
    id: 3,
    name: 'Mike'
};

console.log(loginUser(user));
console.log(loginUser(user2));


// Array as params
function getRandom(arr) {
    const rand = Math.floor(Math.random() * arr.length);

    return arr[rand];
}
const number = [12, 2, 4, 11, 90, 43];
console.log(getRandom(number));
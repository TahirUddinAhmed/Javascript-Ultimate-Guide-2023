// console.log(window.innerHeight);
// console.log(window.innerWidth);

const globalVar = "Hi i am global";

function testFn() {
    console.log(globalVar, "running from inside function");
}

testFn();

console.log(globalVar);

// function scope
function add() {
    const x = 2;
    const y = 33;

    console.log(x + y);
}

add();

// can't access function scope at global level
// console.log(x); // Uncaught ReferenceError: x is not defined
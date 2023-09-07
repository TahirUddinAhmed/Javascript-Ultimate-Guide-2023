console.log(addMoneySign('₹', 100)); // function declaration are hoisted

// function declaration
function addMoneySign(sign, amount) {
    return `${sign}${amount}`;
}

const doller = addMoneySign('$', 100);

console.log(doller);

// function expression
// console.log(add(5, 13)); // function expression are not hoisted
const add = function(x, y) {
    return x + y;
}

console.log(add(5, 8));
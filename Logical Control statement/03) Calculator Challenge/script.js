function calucalator(num1, num2, op) {
    let res;
    if(op === '+') {
        res = num1 + num2;
    } else if(op === '-') {
        res = num1 - num2;
    } else if(op === '*') {
        res = num1 * num2;
    } else if(op === '/') {
        res = num1 / num2;
    } else {
        res = 'Please enter a valid operator';
    }

    return res;
}

console.log(calucalator(5, 2, '+'));
console.log(calucalator(5, 2, '-'));
console.log(calucalator(5, 2, '*'));
console.log(calucalator(5, 2, '/'));
console.log(calucalator(5, 2, '@'));
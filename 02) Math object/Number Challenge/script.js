let x = Math.floor(Math.random() * 100 + 1);
let y = Math.floor(Math.random() * 50 + 1);

// output
let sum, diff, product, division, rem;

sum = `${x} + ${y} = ${x + y}`;
diff = `${x} - ${y} = ${x - y}`;
product = `${x} * ${y} = ${x * y}`;
division = `${x} / ${y} = ${x / y}`;
rem = `${x} % ${y} = ${x % y}`;

console.log(sum);
console.log(diff);
console.log(product);
console.log(division);
console.log(rem);
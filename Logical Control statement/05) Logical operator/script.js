// logical operators
console.log(13 > 10 && 30 < 25); // && operator 
console.log(13 > 10 || 30 < 25); // || Operator

// ?? - return the right side operand when the left is
// null or undefined

let a;

a = 10 ?? 20;
a = null ?? 20;
a = undefined ?? 20;
a = 0 ?? 20;
a = 10 ?? null;

console.log(a);
// const arr = [1, 2, 3, 4, 5];
// expected result = [6, 5, 4, 3, 2, 1, 0];

const arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.unshift(0);
arr.reverse();

console.log(arr);

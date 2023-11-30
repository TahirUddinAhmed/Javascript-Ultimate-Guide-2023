const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = numbers.reduce(function(previousValue, CurrentValue) {
//     return previousValue + CurrentValue;
// }, 0);

const sum = numbers.reduce((accumulator, currentVal) => accumulator + currentVal, 0) 

// console.log(sum)

const cart = [
    {id: 1, title: 'Product 1', prize: 150},
    {id: 2, title: 'Product 2', prize: 190},
    {id: 3, title: 'Product 3', prize: 175}
];

const totalCart = cart
    .map(item => item.prize)
    .reduce((acc, cur) => acc + cur, 0)


// another way to do this
const total = cart.reduce((acc, product) => {
    return acc + product.prize;
}, 0)

console.log(totalCart)
console.log(total)

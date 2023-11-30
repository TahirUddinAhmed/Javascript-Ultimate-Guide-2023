// print/log the numbers from 1 to 100
const num = 100;

for(let i = 1; i <= 100; i++) {
    // for multiple of three print "Fizz" instead of that number
    // for multiple of five print "Buzz" instead of that number

    if(i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if(i % 5 === 0) {
        console.log('Buzz');
    } else if(i % 3 === 0) {
        console.log('Fizz');
    }
    else {
        console.log(i);
    }
    
}
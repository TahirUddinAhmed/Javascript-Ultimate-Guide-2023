// Falsy Values
// - false
// - 0
// - "" or '' (empty string)
// - null
// - undefined
// - NaN

let x = NaN;

if(x) {
    console.log('This is truethy');
} else {
    console.log('This is falsy');
}

// console.log(x);


// Truethy values
// - anything else that is not falsy
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// [] (empty array)
// {} (empty object)
// function () {} (empty function)

let y = function () {};

if(y) {
    console.log('This is truethy');
} else {
    console.log('This is falsy');
}


// truethy and falsy caveats
const children = 0;

if(!isNaN(children)) {
    console.log(`You've ${children} Children`);
} else {
    console.log('Please enter number of children');
}

// checking for empty arrays
const posts = ['post1', 'post2'];

if(posts.length > 0) {
    console.log('List all posts:');
    // code for listing the post
} else {
    console.log('No post to list');
}


// checking for empty objects
const user = {
    
}

if(Object.keys(user).length > 0) {
    console.log('List of all users: ');
} else {
    console.log('No user to show');
}



const n = 6;

// for(let c = 2; c < n; c++) {
    // if(n % c === 0) {
    //     console.log('Not prime');
    // } 
// }
let c = 2;
let res;
while(c <= Math.sqrt(n)) {
    if(n % c === 0) {
        res = 0;
        break;
    } 

    c++;
} 

if(res === 0) {
    console.log('not prime')
} else {
    console.log('prime');
}


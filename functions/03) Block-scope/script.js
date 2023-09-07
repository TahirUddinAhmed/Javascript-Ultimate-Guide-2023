// block scope

if(true) {
    const a = 400;
    let b = 600;
    var c = 800;
}

// console.log(a);
// console.log(b);
console.log(c); // var is not block scope

// var is function scope

function mul() {
    var a = 3;
    var b = 7;

    console.log(a * b);
}

mul();

// console.log(a); // var is function scope
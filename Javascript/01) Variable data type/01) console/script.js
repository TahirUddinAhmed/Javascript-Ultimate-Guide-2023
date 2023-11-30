console.log(100);

console.log("Hello, world!");

console.log(20, "Hi, there", true);

// error method
console.error("this is an error");
// warn method
console.warn("warning");
console.warn("warning");
console.warn("warning");

// table method
console.table({'roll': 1, 'Name ': 'Tahirahmed', 'Email': 'tahiruddinahmed@gmail.com'});

// group method
console.group("Start");
console.log("Tahir Ahmed");
console.log("My age is ", 20);
console.log("I am a web developer");
console.groupEnd();

// we can add style to our console object
var style = "padding: 4px; background-color: white; color: green; font-size: 22px;";

console.log("%cWelcome to my JS Course", style);
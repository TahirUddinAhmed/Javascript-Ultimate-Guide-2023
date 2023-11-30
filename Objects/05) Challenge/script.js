const library = [
    {
        title: "The power of your subconcious mind",
        author: 'william',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "The second book",
        author: 'John Doe',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "The third book",
        author: 'Mike',
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
];

//Step 2:  set read property to for all three objects
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step 3: Destructure the title of the first book and rename the variable to firstBook
// const [first] = library;
// const {title: firstBook} = first;
// another way
const {title: firstBook} = library[0];


// Step 4: turn the library object into a JSON string
const str = JSON.stringify(library);


console.log(library)
// console.log(first)
console.log(firstBook)
console.log(str)
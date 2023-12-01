const person = {
    name: 'Tahir Uddin Ahmed',
    age: 20,
    isAdmin: true,
    address: {
        state: 'Assam',
        city: 'Morigaon',
        zip: 782105
    },
    hobbies: ['music', 'coding', 'piano']
};

// accessing properties from the object
let name = person.name;
let age = person['age'];
let state = person.address.state;
let fav_hobby = person.hobbies[2];

console.log(name);
console.log(age);
console.log(state);
console.log(fav_hobby);

// update properties 
person.name = 'Mike';
person['isAdmin'] = false;

// remove properties
delete person.age;

// add properties
person.hasChild = true;

console.log(person);

// function 
person.greet = function() {
    console.log("Hello, I am Tahir");
}

person.greet();
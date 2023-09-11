## Javascript Object Methods

1. Object.key(obj): Returns an array of a given object's own enumerable property names.

e.g: 
<pre>
const person = {
    name: 'john',
    age: 30,
    occupation: 'Enginner'
};
const keys = Object.keys(person);
// ['name', 'age', 'occupation']
</pre>
2. Object.values(obj): Returns an array of a given object's own enumerable property values.

e.g: 
<pre>
const person = {
    name: 'john',
    age: 30,
    occupation: 'Enginner'
};
const keys = Object.keys(person);
// ['john', 30, 'Engineer']
</pre>
3. Object.entries(obj): Returns an array of a given object's own enumerable property key-value pairs.

e.g: 
<pre>
const person = {
    name: 'john',
    age: 30,
    occupation: 'Enginner'
};
const keys = Object.entries(person);
// [['name', 'john'], ['age', 30], ['occupation', 'Engineer']]
</pre>
4. Object.assign(target, ...sources): Copies the values of all enumerable properties from one or more source objects to a target object.

E.g: 
<pre>
const target = {};
const source = {name: 'Alice', age: 25};
Object.assign(target, source);
console.log(target);
// {name: 'Alice', age: 25}
</pre>
5. Object.hasOwnProperty(prop): Check if an object has a specific property.
this method is used to determine if an object has a property directly on itself(not inherited from its property chain).

E.g: 
<pre>
const person = {
    name: 'Tahir',
    age: 20,
    occupation: 'Developer'
};
const keys = Object.hasOwnProperty('name'); // true
const keys = Object.hasOwnProperty('gender'); // false
</pre>

## Primitive data types

Primitive data type are a set of basic data types in javascript.
There are 7 types of primitive data types: 
    1. Null
    2. Number - (56, 3.14)
    3. Boolean - (true or false)
    4. BigInt
    5. String - ("hello", 'Javascript', "214")
    6. Symbol 
    7. Undefined

## Non-primitive Data types - Objects
 Objects are collections of key-value pairs, where the keys are strings(or symbols)
 and the values can be any data type, including other objects,

 e.g 
```javascript
 let person = {
    "name" : 'John',
    "age" : 30,
    "esEmployed" : true,
    "address" : {
        city : 'new York',
        zip: '10001';
    }

  }
```
Practise Questions: write a js program to store name, phone number, and marks of a student using objects.


```javascript
const store = {
  'store_name': "Giftify Creation",
  'phone': 9365910717,
  'marks': 86,
}
```
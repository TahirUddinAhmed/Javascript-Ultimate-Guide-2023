# Array basic methods
1. push(): Adds one or more elements to the end of an array and returns the new length of the array.

```javascript
const arr = [1, 2, 4, 3];
arr.push(5); // now the array is [1, 2, 4, 3, 5]
``` 
2. pop(): removes and return the last element of an array

```javascript
arr.pop(); // removes the last element
// now the array is [1, 2, 4, 3]
const getPoppedEl = arr.pop(); // get the popped element in getPoppedEl variable
//arr[1, 2, 4]
// getPoppedEl = 3
```

3. unshift(): Adds one or more elements to the beginning of the array and returns the new length of the array.

```javascript
arr.unshift(0); 
// arr[0, 1, 2, 4]
```

4. shift(): remove and return the first element of an array

```javascript
arr.shift();
//removes the first element which is 0
// arr[1, 2, 4]
```

Get Example Code 
- [click](script.js)

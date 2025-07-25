const score = 400
console.log( score );

const balance = new Number(100)
console.log( balance );
console.log( balance.toString() ); // changes to string type of change kore dai.
console.log( balance.toString().length ); // length of the string representation of the number eg 3
console.log( balance.toFixed(2) ); // 100.00, fixed to 2 decimal places 

const OtherNumber = 273.80
console.log(OtherNumber.toPrecision(3)); // 

const hundreds = 100000
console.log( hundreds.toLocaleString('en-IN') ); // 10,000, adds commas for thousands

//++++++++++++++++++++++MATHS LIBRARY+++++++++++++++++++++++++++++++
const Comment = 'Maths Library in JavaScript';
console.log(Comment.toUpperCase()); // converts to uppercase

console.log(Math.abs(-5)); // absolute value turns -5 to 5 it works only with negative numbers
console.log(Math.round(4.5)); // rounds to nearest integer, 4.5 becomes 5
console.log(Math.ceil(4.1)); // rounds up to the nearest integer, 4.1 becomes 5
console.log(Math.floor(4.9)); // rounds down to the nearest integer, 4 becomes 4
console.log(Math.max(45, 24, 32, 48, 59)); // returns the maximum value from the list
console.log(Math.min(45, 24, 32, 48, 59)); // returns the minimum value from the list
console.log(Math.sqrt(89)); // returns the square root of 15, which is approximately 3.872983346207417
console.log(Math.random()); // returns a random number between 0 and 1
console.log((Math.random()*10) + 1); // returns atleast 1 and at most 10, random number between 1 and 10 because we multiply by 10 and add 1
console.log(Math.floor(Math.random()*10+1)); // returns a random integer between 1 and 10, we use Math.floor to round down the random number to the nearest integer

const min = 10
const max = 20
console.log( Math.floor(Math.random() * (max - min + 1)) +min ); // returns a random integer between 1 and 90, we use Math.floor to round down the random number to the nearest integer

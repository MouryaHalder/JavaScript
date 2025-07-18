const name = "Mourya Halder";
const age = 25;
const RepoCount = 10;

// Nobody uses this anymore
//console.log(name + RepoCount);
// console.log("My name is " + name + " and I am " + age + " years old.");

// Modern way to do it
console.log(`Hello, my name is ${name} and my repo count is ${RepoCount}`); // String Interpolation
console.log(`Hello, my name is ${name} and I am ${age} years old.`); // String Interpolation

const GameName =  new String('Red-Dead-Redemption-2'); // index 0 - 20
console.log(GameName[0]);
console.log(GameName[4]);
console.log(GameName[9]);
console.log(GameName.__proto__); // This will show the prototype of the String object

console.log(GameName.length); // Length of the string
console.log(GameName.toUpperCase()); // Convert to uppercase
console.log(GameName.charAt(4)); // Get character at index 0
console.log(GameName.indexOf('p')); // Find the index of a substring

const NewString = GameName.substring(0,2); // Extract a part of the string
console.log(NewString);

const AnotherString =  GameName.slice(-15,10); // Extract a part of the string
console.log(AnotherString);

// Trim and replace methods
const NewString1 = "          Sumit     "
console.log(NewString1); // Original string with spaces
console.log(NewString1.trim());     // Remove whitespace from both ends
const TrimmedString = "    Hello World!    ";
console.log(TrimmedString);
console.log(TrimmedString.trim()); // Remove whitespace from both ends

const url = "https://www.example.com";
const urlParts = url.split("/"); // Split the URL into parts

const url2 = "https://hitesh.com/hitesh%20chaudhary"; // URL with encoded space
console.log(url2.replace('%20','-')); // Replace encoded space with a - sign

console.log(url2.includes('hitesh')); // Check if the string includes 'hitesh'
console.log(url2.includes('sundar'));
console.log(url2.endsWith('chaudhary')); // Check if the string ends with 'chaudhary'
console.log(url2.startsWith('https')); // Check if the string starts with 'https'

console.log(GameName.split('-')); // Split the string into an array using '-'
console.log(GameName.split('')); // Split the string into an array of characters
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


// Explaination:
// x starts at 3
// x++ returns 3 (assigns it to y) then increments x to 4
// Final result: x = 4, y = 3

// a starts at 3
// ++a increments a to 4 and returns that value for b
// Final result: a = 4, b = 4


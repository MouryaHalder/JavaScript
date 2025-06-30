let score = "K3"

// console.log(typeof score); // Number

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber); // NaN (Not a Number)

// "33" => 33
// "33abc" => NaN but type is still Number
// true => 1; false => 0

let isLoggedIn = "mourya"
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);
// 1 => true
// 0 => false
// "0" => true
// "1" => true
// "mourya" => true
// "" => false
let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber); // "33"

console.log(typeof stringNumber);


// Stack (Primitive), Heap memory  (Non-Primitive)
  // Stack memory stores primitive data types like numbers, strings, booleans, etc.
  // when we need data stack always provide copy of the value. stored in the stack memory
let myYoutubeChannel = "InchoateGaming"
let anotherYoutubeChannel = myYoutubeChannel
anotherYoutubeChannel= "ChaiAurCode"
console.log(myYoutubeChannel);
console.log(anotherYoutubeChannel);

let userOne = {
    email: "lionelmourya@gmail.com",
    UserName: "Lionel",
    upiId: "lionelmourya@okicici",
    age: 22,
}
 // Heap memory stores objects, arrays, functions, etc.
let userTwo = userOne;
userTwo.email =  "messi@football.com",  // we can access userOne properties by using . value
console.log(userOne.email);
console.log(userTwo.email);
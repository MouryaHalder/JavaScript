let MyDate = new Date(); // made date object instance 
console.log(MyDate.toString()); // logs current date and time
console.log(MyDate.toISOString()); // logs current date and time in ISO format
console.log(MyDate.toDateString()); // logs current date in a human-readable format
console.log(MyDate.toTimeString()); // logs current time in a human-readable format
console.log(MyDate.getFullYear()); // logs the current year
console.log(typeof MyDate);

let myCreatedDate = new Date (2004,0,24);
console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toISOString()); // logs the created date in ISO format
let myCreatedDate2 = new Date ("01-14-2023");
console.log(myCreatedDate2.toDateString());

// to see exact time stamps
let myTimeStamp = Date.now(); // returns the number of milliseconds since January 1, 1970
// console.log(myTimeStamp); // logs the current timestamp
// console.log(myCreatedDate.getTime()); // logs the timestamp of the created date
console.log(Math.floor(Date.now()/1000)); // logs the current timestamp in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); // logs the current month (0-11, where 0 is January)
console.log(newDate.getDate()); // logs the current day of the month (1-31

newDate.toLocaleString('default',{
    weekday: 'long', // 'short' for abbreviated, 'narrow' for single letter
    year: 'numeric', // '2-digit' for two-digit year
    month: 'long', // 'short' for abbreviated month, 'narrow' for single letter
    day: 'numeric', // '2-digit' for two-digit day
    hour: '2-digit', // 'numeric' for no leading zero
    minute: '2-digit', // 'numeric' for no leading zero
    second: '2-digit', // 'numeric' for no leading zero
    timeZoneName: 'short' // 'long' for full name, 'short' for abbreviation
}).toString(); // formats the date according to locale settings
console.log(newDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
})); // logs the formatted date string




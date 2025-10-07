// Dates

let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.getTime());

// let myCreatedDate = new Date();
// let myCreatedDate = new Date(2023, 02, 29);
let myCreatedDate = new Date("07-10-2025");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.round(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate() + 1);
console.log(newDate.getDay());
console.log(newDate.getHours());

// `${newDate.getDay()} and the time is this`  

newDate.toLocaleString('default', {
    weekday: 'long',
    timeZone: ''
});
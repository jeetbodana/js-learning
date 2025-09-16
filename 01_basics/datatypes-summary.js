// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

// const BigNumber = 123512351462346n

// Reference (Non primitive)

// Array, Objects, Functions

const Heros = ["Shaktiman", "naagraj", "doga"]
let myObj = {
    name: "jitendra",
    age: 32
}

const myFunction = function(){
    // console.log("Hello World");
}

// console.log(typeof anotherId);

// ++++++++++++++++++++++++++++++++++++++++

// stack Memory and Heap Memory
// Primitive is a stack Memory
// Non Primitive type is a heap Memory

let myName = "JitendraBodana";

let anotherName = myName;

anotherName = "JeetBodana";

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "jitendrabodana@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
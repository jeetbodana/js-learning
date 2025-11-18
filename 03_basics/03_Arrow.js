const user = {
    username: "jitendra",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "jeet";
// user.welcomeMessage();
// console.log(this);

// function chai() {
//     let username = "jitendra"
//     console.log(this.username);
// }
// chai();

// const chai = function() {
//     let username = "jitendra"
//     console.log(this.username);
// }
// chai();

// const chai = () => {
//     let username = "jitendra"
//     console.log(this);
// }

// chai();


// Basic Arrow Function 
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username: "jitendra"})

console.log(addTwo(3, 5));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
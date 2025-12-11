const user = {
    username: 'Jitendra',
    loginCount: 10,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got User Details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}

// console.log(user.username); // Dot Notation
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise();
// const date = new Date();

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Hello, ${this.username}`);
    }

    return this;
}

const userOne = new User('Jitendra', 10, true);
const userTwo = new User('John', 5, false);
console.log(userOne.constructor);
// console.log(userTwo);
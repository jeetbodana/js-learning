// singleton
// Object.create

// objectr literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Jitendra",
    "full name": "jitendra Bodana",
    [mySym]: "mykey1",
    age: 30,
    location: "Indore",
    email: "jitendra@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["name"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]);

JsUser.email = "jitendra@gmail.com"
// console.log(JsUser.email);
// Object.freeze(JsUser);
JsUser.email = "bodana@gmail.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

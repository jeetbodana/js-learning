let myName = "Jitendra    ";
let myChannel = "Chai    ";

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        conssole.log(`Spiderman power is ${this.spiderman}`);
    }
}

Object.prototype.jitendra = function() {
    console.log("Jitendra is present in all objects");
}

Array.prototype.heyJitendra = function() {
    console.log(`Jitendra say Hello`);
}

// heroPower.jitendra();
// myHeros.jitendra();
// myHeros.heyJitendra();
// heroPower.heyJitendra();


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeacherSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeacherSupport,
}

Teacher.__proto__ = User;

// Modern syntax
Object.setPrototypeOf(TeacherSupport, Teacher);


let anotherUsername = "ChaiaurCode     ";
String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"Jitendra".trueLength();
"ChildBear".trueLength();
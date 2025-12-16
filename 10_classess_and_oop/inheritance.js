class User {
    constructor(username) {
        this.username = username;
    }


    logMe() {
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher('chai', 'chai@teacher.com', '12345');
chai.addCourse();

const masalaTea = new User('masalaTea');

masalaTea.logMe();

console.log(chai instanceof Teacher);
console.log(chai instanceof User);

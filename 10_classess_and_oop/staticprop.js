class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return `123`
    }

}

const Jitendra = new User('Jitendra')
// console.log(Jitendra.createId());

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iPhone = new Teacher('iPhone', 'iphone@example.com');
console.log(iPhone.createId());

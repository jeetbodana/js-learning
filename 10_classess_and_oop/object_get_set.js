const User = {
    _email: 'jitenrabodana@gmail.com',
    _password: '1225asdf',

    get email() {
        return this._email.toUpperCase();
    },
    set email(value) {
        this._email = value;
    }

}

const tea = Object.create(User);
console.log(tea.email);

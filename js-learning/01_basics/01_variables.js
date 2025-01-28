const accountId = 12345
let accountEmail = "jitendra@google.com"
var accountPassword = "123"
accountCity = "Dewas"
let accountState;

// accountId = 3 not allowed

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/


accountEmail = "hello@hello.com"
accountPassword = "456"
accountCity = "Indore"

// console.log(accountEmail, accountPassword, accountCity);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


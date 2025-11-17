

function sayMyName() {
    console.log("J");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("N");
    console.log("D");
    console.log("R");
    console.log("A");
}

// sayMyName();

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

function loginUserMessage(username = "jeet"){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Jitendra"));
console.log(loginUserMessage("jitendra"));
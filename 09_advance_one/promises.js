// promise 1
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async Task is Complete')
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise consumed');
})

// promise 2
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task 2 is complete');
        resolve();
    }, 1000)
}).then(function(){
    console.log('Promise 2 consumed');
})

// promise 3
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'chai', email: 'chai@example.com'});
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// promise 4 - with reject

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: 'Jitedra', email: 'jitedra@example.com'});
        } else {
            reject('Error: Something went wrong');
        }
    }, 1000)
})

promiseFour.then(user => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log('The Promise is either resolved or rejected'));


// Promise 5 

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: 'javascript', password: '123'});
        } else {
            reject('Error: JS went wrong');
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response) 
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E: ', error);
//     }
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log('E: ', error);
})
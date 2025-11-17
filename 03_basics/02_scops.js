let a = 300;
if (true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Inner:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username =  "Jitendra";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);
    two();
}
// one();

if (true) {
    const username = "Jitendra"
    if(username === "Jitendra") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);   
}
// console.log(username);



// +++++++++++++++++ intersting +++++++++++++


function addone(num){
    return num + 1
}

console.log(addone(5));

const addTwo = function(num) {
    return num + 2
}

console.log(addTwo(5));

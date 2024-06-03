var c = 300 
let a =300

if (true) {
    let a = 10
    const b = 20
    // var c = 30         This will give error
    console.log("Inner: ",a);

}


console.log("Outer: ",a);
// console.log(b);        Scope error 
console.log(c);

// ---------------Next lecture--------------- 

function one(){
    const username ="Om"

    function two() {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one() 

if(true){
    const username = "Om"

    if(username === "Om"){
        const website = "youtube"
        console.log(username + website);
    }

    // console.log(website);    <=Error
}
// console.log(username);       <=Error

// ++++++++++++++++++++++++++++++ Intresting +++++++++++++++++++++++++

// This will be accessable becaause it call function
addone(5)

function addone(num) {
    return num+1
}

// This will no be accessable because the function declear in the form of expression (Hoisting)
addTwo(5)

// This is function in the form of expression 
const addTwo = function addTwo(num) {
    return num+2
}


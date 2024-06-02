
function sayMyName(){
    console.log("O");
    console.log("M");
}

sayMyName; // Referance
sayMyName() // Call

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

function addTwoNumbers(number1,number2){
    // result = number1+number2
    // return result
    return number1+number2
}

const result = addTwoNumbers(10,20)
console.log("Result :",result);

function loginUserMessage(username){
    if(username===undefined){
        return "Enter username"
    }
    return `${username}, Just logged in`
}
console.log(loginUserMessage("Om"));

// Lecture 2

// Rest [...num1]
function calculateCarPrice(...num1){
    return num1
}
console.log(calculateCarPrice(100,200,300,400,500));

// Object passing to function
const user={
    userName :"Om",
    price : "2000"
}

function handleObject(anyUser){
    console.log(`Username is ${anyUser.userName} and price is ${anyUser.price}`);
}
handleObject(user);

// handleObject({
//     userName:"Om",
//     prices:"2000"     <=  Here is the problem by passing prices insted of passing price
// });

// Array passing to function
function returnSecondVal(anyArray){
    console.log(`Here is the second value of array ${anyArray[1]}`);
}

returnSecondVal([100,200,300,400])


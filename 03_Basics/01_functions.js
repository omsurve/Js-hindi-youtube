
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
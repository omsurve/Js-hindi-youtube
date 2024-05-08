// Primitive

// 7 Types: 
        // String, Number, Boolean, Null, Undefined, Symbol, BigInt 

const score =100
const scorerValue = 100.30

const isLoggedIn = true
const temperature = null
let userEmail;

const symbole = Symbol("123")
const symbole2 = Symbol("123")

console.log(symbole===symbole2);

const bigInt = 233355665566655555n


// Referance Type:
                // Array, Function, Object


// Array
const names = ["Om","Raj","Shree","Bhavesh"]

//object
let myObj={
        "Name":"Om",
        "Age":21,
        "Address":"nisarga colony jalgaon"
}

//Function
const myFun =function (){
        console.log("Hello World");
}

/*-------------------------------------------------------------------------------------------------------------------- */


// Stack (Primitive), Heape (Non-Premitive)

// Primitive
let myname = "Om"
let anotherName = myname

anotherName = "Omdyaa"


console.log(myname);
console.log(anotherName);//This value will not change 


// Non-premitive
let user1 = {
        "Name" : "Om",
        "Age": "21",
        "Email": "omsurve@gmail.com"
}

let user2 = user1
console.log(user1.Email);
console.log(user2.Email);

user2.Email = "om@gmail.com"

console.log(user1.Email);
console.log(user2.Email);//This value will change in both user1 and user2
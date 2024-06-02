// Singleton

// Object literals

const mySum = Symbol("Key1");

const JsUseer = {
    name:"Om",
    "full Name":"Om Surve",
    age: 18,
    [mySum]:"myKey1", // For use as symbol Syntax
    location:"Jalgaon",
    email:"omsurve@gmail.com",
    isLoggedIn:false,
    lastLoginedDays:["Monday","Saturday"]
}

// Access Object
console.log(JsUseer.name);
console.log(JsUseer["name"]);

// Only way to access full Name because  of space between them 
console.log(JsUseer["full Name"]);

// To use as a symbol
console.log(JsUseer[mySum]);
console.log(typeof JsUseer[mySum]);

// Update element
JsUseer.email="omsurve3043@gmail.com"

// Freeze object
// Object.freeze(JsUseer)

// Object not going to be update because it is freeze
JsUseer.email="omsurve3042003@gmail.com"
console.log(JsUseer);

// Add function in JsUser
JsUseer.greeting = function(){
    console.log("Hello Js users");
}
console.log(JsUseer.greeting); // It returns a referance
console.log(JsUseer.greeting()); // Call

JsUseer.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUseer.greetingTwo);
console.log(JsUseer.greetingTwo());
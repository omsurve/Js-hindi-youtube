// let myName = "Om   "
// let courese = "BCA   "

// Task to create trueLength method
// console.log(myName.trueLength());

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spider Power is ${this.spiderman}`);
    }
}

// Instade of injecting methods to saprate (Array,String,Function) we directly add to the Object 

Object.prototype.Om = function(){
    console.log(`Om is present in all objects`);
} 

Array.prototype.sayHii = function(){
    console.log(`Sya Hii call`);
}

heroPower.Om()
myHeros.Om()
myHeros.sayHii()
// heroPower.sayHii() // Not accessable because sayHii() method is decleare in Array and it is not access by function

// Inheritance
// Old approch
const User = {
    name: "chai",
    email: "chai@google.com"
}


const Teacher = {
    makeVideo : true
}

const TeacherSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime : true,
    __proto__ : TeacherSupport // Give access of TeacherSupport to TASupport
}

// Give access of User to Teacher
Teacher.__proto__ =User


// Morden Syntaxt   
Object.setPrototypeOf(TeacherSupport,Teacher)

// ------------------------------------------------------------------------------
// Solution of task

let anotherUserName = "ChaiAurCode                   ";

console.log(anotherUserName); 

String.prototype.trueLength = function(){
    console.log(`${this}`); // Current context
    console.log(`True length is ${this.trim().length}`);
}

anotherUserName.trueLength()
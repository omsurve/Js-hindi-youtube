// Inheritance 

class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username); // This will call superclass constructor and set the username, (this will pass by default)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`Course added by ${this.username}`);
    }
}

const chai = new Teacher("chai","chai@gmail.com","1234")
chai.addCourse()
chai.logMe()

const masalaChai = new User("masalaChai")
masalaChai.logMe()

console.log(chai instanceof User);
console.log(chai instanceof Teacher);
// ES6

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encriptPassword(){
        return `${this.password+"abc"}`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai","chai@gmail.com","123")

console.log(chai.encriptPassword());
console.log(chai.changeUsername());


// Behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encriptPassword = function(){
    return `${this.password+"abc"}`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea","tea@gmail.com","123")

console.log(tea.encriptPassword());
console.log(tea.changeUsername());


function multiplyBy5(num) {
    return num*5
}

multiplyBy5.pawer = 2
console.log(multiplyBy5(5));
console.log(multiplyBy5.pawer);
console.log(multiplyBy5.prototype);

// This keyword is used to refer current context (jisne call kiya this ko )
function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    // score++
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Price is: ${this.score}`);
}

const chai = new createUser("chai",25)
// const tea =  createUser("tea",250) // Create a problem because not use of new key word, no new instance will be created
chai.printMe()





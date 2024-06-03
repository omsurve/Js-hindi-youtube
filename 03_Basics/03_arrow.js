const user={
    username : "Om",
    price:"999",

    welcomeMessage:function  (n) {
        console.log(`${this.username}, welcome to websiite`);
    }
}
user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()


// const chai = function chai() {
//     let username = "Om"
//     console.log(this);
//     // To access elements (this) keyword work in objects not on function
//     // console.log(this.username); 
// }
// chai()

const chai = ()=> {
    let username = "Om"
    console.log(this);
    
}
chai()

// Basic arro function
// const addTwo = (num1,num2)=>{
//     return num1+num2
// }


// Implicet return 
const addTwo = (num1,num2)=> num1+num2
// const addTwo = (num1,num2)=> (num1+num2)  <= No need to write return keyword
console.log(addTwo(10,20))

// While return object we have to use () brackets 
const object = (num1,num2)=> ({key:"Value"})
console.log(object());



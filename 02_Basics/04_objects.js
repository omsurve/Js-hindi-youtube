// const tinderUser = new Object()   <= This is singleton object

const tinderUser = {}   // <= This is non singleton object

tinderUser.id =  "123abc";
tinderUser.name = "Om"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Om",
            lastname:"Surve"
        }
    }
}
console.log(regularUser.fullName.userFullName.firstName);

const obj1  = {1:"a",2:"b"}
const obj2  = {3:"c",4:"d"}
const obj4  = {5:"c",6:"d"}

// This will create two different objects in object3
// const obj3 = {obj1,obj2} 

// It act as the target and source , first empty array is target and other are the source which creates 3rd array
// const obj3 = Object.assign({},obj1,obj2,obj4)

// By using spred (It is most easy method and mostly used)
const obj3 = {...obj1,...obj2,...obj4}
console.log(obj3);

const users = [
    {
        id:1,
        email:"o@gmail.com"
    },
    {
        id:1,
        email:"o@gmail.com"
    },
    {
        id:1,
        email:"o@gmail.com"
    }
]
// access
users[1].email

console.log(tinderUser);
// Returns value in form of array
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

// Returns values in form of array within array
console.log(Object.entries(tinderUser));

// To check the property exist or not
console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// Next lecture---->

const course = {
    courseName : "Js in hindi",
    coursePrice : "1000",
    courseInstructure : "Hitesh"
}

course.courseInstructure; // Normal way to access

// Destructuring of object ,IMP* 
const {courseInstructure : instructure} = course
console.log(instructure); // To increase accessability

// Data in Jason format in boject or array

// {
//     "courseName ": "Js in hindi",
//     "coursePrice ": "1000",
//     "courseInstructure ": "Hitesh

// }

[
    {},
    {},
    {}
]

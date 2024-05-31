const name ="Om"
const repoCount = 50

console.log(name + repoCount +" Values"); // This is old way to write value

console.log(`Hello my name is ${name} , my repo count is ${repoCount}`); // New way to write

// To use all string function we have to declear string in that way
const gameName = new String("BGMI") 

console.log(gameName);
console.log(gameName.__proto__);
console.log(gameName[0]);

// String functions
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('I'));

console.log(gameName.slice(0,2))

const newString = "     Om-Surve      ";
console.log(newString.trim()); // Trim the excess space

const url = "http://om%20surve.com";
console.log(url.replace('%20','-')); //Replace the value

const splitDemo = new String("Om-Diliprao-Surve");
console.log(splitDemo.split('-')); // Split the value on bacise of (-)

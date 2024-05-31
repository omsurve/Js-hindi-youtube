// Array

const myArray1 = [0,1,2,3,4,5]
myHeros = ["shaktiman","nagraj"]

const myArray2 = new Array(0,1,2,3,4,5)
console.log(myArray2[2]);

myArray1.push(7) // Push at last
console.log(myArray1);

myArray1.pop() // Remove the last item
console.log(myArray1);

myArray1.unshift(9) // Insert the value at first place
console.log(myArray1);

myArray1.shift() // Remove the first element in array
console.log(myArray1);

console.log(myArray1.includes(6)); // Return boolean value
console.log(myArray1.indexOf(2)); // Return index of the element

const newArray = myArray1.join(); // Return comma saprated values by changing array type to string
console.log(myArray1); 
console.log(newArray);
console.log(typeof newArray); // String type

// Slice ,Splice

console.log("A",myArray1);
console.log(myArray1); // Orignal array

console.log("B",myArray1);
const myn1 = myArray1.slice(1,3); // Retunt elements upto 2 index (Excluding range)
console.log(myn1); 

console.log("C",myArray1);
const myn2 = myArray1.splice(1,3); // Retunt elements upto 3 index (Including range) // This will change the orignal array 
console.log(myArray1);
console.log(myn2);


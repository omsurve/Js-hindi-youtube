// for of

const number = [1,2,3,4,5,6,7,8,9]

for (const num of number) {
    console.log(num);
}

const greetings = "hello world"

for (const greet of greetings) {
    if(greet==" ") continue

    console.log(`Each charecter is ${greet}`);
}

// Maps

const map = new Map()
map.set('In',"India")
map.set('USA',"United states of america")
map.set('Fr',"France")
map.set('In',"India")      // This will not allow duplicate entry

console.log(map);

// for (const key of map) {
//     console.log(key);
// }

// Maps are iteratable by (forof) loop

for (const [key,value] of map) {    //Destructuring of array
    console.log(key,':-',value);
}

const myObj = {
    'game1':'NFS',
    'game2':'Spiderman'
}

// Object are not iteratable by (forof) loop

// for (const [key,value] of myobj) {  
//     console.log(key,':-',value);
// }

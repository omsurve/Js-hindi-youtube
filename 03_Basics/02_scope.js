var c = 300 
let a =300

if (true) {
    let a = 10
    const b = 20
    // var c = 30         This will give error
    console.log("Inner: ",a);

}


console.log("Outer: ",a);
// console.log(b);        Scope error 
console.log(c);
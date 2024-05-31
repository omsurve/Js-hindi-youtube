const score = 400
console.log(score);

const balance = new Number(400)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // round off to 2 decimal

const anotherNumber = 123.8966

console.log(anotherNumber.toPrecision(3));
console.log(anotherNumber.toPrecision(4));

const hundered = 1000000

console.log(hundered.toLocaleString('en-IN'));

// ++++++++++++++++  MATHS   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.8))
console.log(Math.round(4.9))
console.log(Math.min(4,9,5,7))
console.log(Math.max(4,9,5,7))

console.log(Math.random()); // Print random number between 0 to 1
console.log(Math.random()*10 + 1); // multiply by 10 to print 1 to 9
console.log(Math.floor(Math.random()*10) + 1); // floor to print exact value not in decimal

max =10
min =20

console.log(Maths.floor(Math.random() * (max - min + 1)+ min)); // To get randome numbers betweeen Max and Min


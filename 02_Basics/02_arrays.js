const marval_heros = ["thor","Ironman","spiderman"];
const dc_heros = ["superman","flash","batman"]

marval_heros.push(dc_heros)

// It will take array as the new element
console.log(marval_heros); 

// Access 3rd of 1st positon array element 
console.log(marval_heros[3][1]); 

// Conact two arrays
const all_heros = marval_heros.concat(dc_heros);
console.log(all_heros);

// Spread two array 
const all_new_heros = [...marval_heros, ...dc_heros]

//Convert below array into single array
const another_array = [1,2,3,[4,5,6],[7,[8,9]]]
const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);

// Boolean value
console.log(Array.isArray("Om surve"));

// Convert string into array
console.log(Array.from("Om surve"));
console.log(Array.from({name:"Om"})); //  Intresting (We have to give what array we want to create Key or values)

let score1 = 100
let score2 = 200
let score3 = 300

// Create array of above elements
console.log(Array.of(score1,score2,score3));
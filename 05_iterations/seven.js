const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.map((num)=> num+10)
console.log(newNums);

// map function map each element of function
// this is chaining process in which first map will pass the value to next map and next map will take it as argument
// filter will return the value if and only if value condition is true

const newNums2 = myNums.map( (num)=> num*10)
                        .map((num)=> num+1)
                        .filter((num)=>num > 50)

console.log(newNums2);
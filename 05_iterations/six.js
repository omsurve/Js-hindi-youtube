const coding = ["Cpp","Java","Py","Ruby","js"]

// ForEach loop never return a value

// const values = coding.forEach((item)=>{
//     console.log(item);
//     // return item
// })
// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// If we dont use {} for arrow function that means we do not start scope and it return impl
// const newNums = myNums.filter((item)=> item>4)

const newNums = myNums.filter((item)=> {
    return item>4
})
console.log(newNums);

const newNums2 = []

myNums.forEach((num)=>{
    if(num>4)
        newNums2.push(num)
})
console.log(newNums2);
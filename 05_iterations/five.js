const coding = ["Cpp","Java","Py","Ruby","js"]

// coding.forEach(function (val) {
//     console.log(val);
// })

coding.forEach((item)=>{
    console.log(item);
})

// Create fuction
function printme(item) {
    console.log(item);
}

coding.forEach(printme) // Pass only referance not execute

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const myCoding = [
    {
        languageName:"Javascript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})
const myNums =[1,2,3,4,5]

// const myTotal = myNums.reduce(function (acc,currentval){
//     console.log(`acc: ${acc} and currentval: ${currentval}`);
//     return acc + currentval
// },0)

const myTotal = myNums.reduce((acc,currentval)=> (acc + currentval),0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price: 2999
    },
    {
        itemName : "py course",
        price: 999
    },
    {
        itemName : "mobile dev course",
        price: 5999
    },
    {
        itemName : "data science course",
        price: 12999
    }
]

const totalPay = shoppingCart.reduce((acc,item)=> item.price, 0)

console.log(totalPay);
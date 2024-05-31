// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let myCreatedDate = new Date(2003,3,30); // Months started from 0 in Js
console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp); // To compair the dates
console.log(myCreatedDate.getTime()); // To get time from the decleared variable
console.log(Math.floor(Date.now()/1000)); // To get sec from time devide them by 1000

let newDate = new Date()
console.log(newDate.getMonth()+1); // To get current date

// `${newDate.getDate()}`

console.log(
    newDate.toLocaleString('default',{
    weekday: "long"
    })
);
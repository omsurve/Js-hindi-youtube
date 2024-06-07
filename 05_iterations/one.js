// For

for (let index = 0; index < 10; index++) {
    const element = index;
    if(element==5){
        console.log("5 is the best number");
    }
    console.log(element);
}

for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(i +" * "+j +" => "+i*j);        

    }
}

myArray = ["Om","Raj","Gau","Shree"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}

// Break and continue

for (let i = 0; i < 20; i++) {
    if(i==5){
        console.log("Detected 5");
        break;
    }    
    console.log(i);
}
for (let i = 0; i < 20; i++) {
    if(i==5){
        console.log("Detected 5");
        continue;
    }    
    console.log(i);
}
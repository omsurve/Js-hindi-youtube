
function setUsername(username){
    this.username = username;
    console.log("Called");
}

function createUser(username,email,password){

// Below method will call the setUsername() method but the variable canNot hold the referance of username, This will remove from memory
    setUsername(username);

// .call() method will hold the referance
// We have to pass (this) as referance of this username
    setUsername.call(this,username);
    this.email = email;
    this.password = password;
}

const U1 = new createUser("Om","o@gmail.com","123")
console.log(U1);


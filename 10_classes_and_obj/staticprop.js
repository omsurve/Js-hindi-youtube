class User{
    constructor(username){
        this.username = username;
    }

    logme(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return "123";
    }
}
const om = new User("om")
// om.createId() // Not acccessable

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email;
    }
}

const phone = new Teacher("phone","p@phone.com");
// console.log(phone).createId();

// Qn no. 01:- You are creating a website for your college. Create a class User with 2 properties, name & email.
// It also has a method called a viewData() that allows user to view website data.

let DATA = "secret information";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data = ", DATA);
    }
}

let student1 = new User("Rahil Tariq", "rahiltariq07@gmail.com");
let student2 = new User("Sahil Tariq Mir", "sahiltariq08@gmail.com");
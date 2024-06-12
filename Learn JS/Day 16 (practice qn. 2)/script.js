// Qn no. 01:- Create a new class Admin which inherits from User. Ad a new method called editData to Admin
// that allows it to edit website data.

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

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }

    editData() {
        DATA = "some new value";
    }
}

let student1 = new User("Rahil Tariq", "rahiltariq07@gmail.com");
let student2 = new User("Sahil Tariq Mir", "sahiltariq08@gmail.com");

let admin1 = new Admin("admin", "admin1@gmail.com");

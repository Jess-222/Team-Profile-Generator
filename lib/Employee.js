class Employee {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    };
    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };
    getRole() {
        return "Employee";
    };
};

// Employee {
//     name: "jessi"
//     email: jessi@gmail.com
//     id: 3
//     role: Engineer
// }

// new Employee("Jessi", "jessi@gmail.com", 1, "Engineer").getName() = "Jessi"

module.exports = Employee;
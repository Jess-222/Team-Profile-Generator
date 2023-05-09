import Employee from './Employee.js';
//const Employee = require('./Employee.js')

class Intern extends Employee {
    constructor(name, email, id, school) {
        super(name, email, id)
        this.school = school;
    }
    getSchool() {
        return this.school
    }

    getRole() {
        return "Intern"
    }
}

export default Intern;
//module.exports = Intern;
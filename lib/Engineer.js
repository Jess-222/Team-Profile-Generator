// import Employee from './Employee.js';
const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor(name, email, id, github) {
        super(name, email, id)
        this.github = github;
    }
    getGithub() {
        return this.github
    }

    getRole() {
        return "Engineer"
    }
}

// export default Engineer;
module.exports = Engineer;


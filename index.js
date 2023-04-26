import fs from 'fs';
import inquirer from 'inquirer';
import createCards from './src/generateTeam.js';

import Engineer from './lib/Engineer.js';
import Manager from './lib/Manager.js';
import Intern from './lib/Intern.js';

const myTeam = [];

const mainPrompt = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Who is this teams manager?"
        },
        {
            type: "input",
            name: "email",
            message: "What is this managers email?"
        },
        {
            type: "input",
            name: "id",
            message: "What is this managers ID?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is this managers office number?"
        },
    ]).then((res) => {
        const manager = new Manager(res.name, res.email, res.id, res.officeNumber)
        myTeam.push(manager)
        return myTeam
    })
}

const addEmployee = () => {
    return inquirer.prompt([{
                type: 'list',
                name: 'role',
                message: "What is this employee's role?",
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'name',
                message: "Employee name?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is this employee's email address?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is this employee's ID number?"
            },
            {
                type: 'input',
                name: 'github',
                message: "What is this employee's github username?",
                when: (input) => input.role === "Engineer"
            },
            {
                type: 'input',
                name: 'school',
                message: "What school does this intern attend?",
                when: (input) => input.role === "Intern"
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: "Are there any other employee's you would like to add?",
                default: false
            }
        ])
        .then(res => {
            let employee;
            if (res.role === "Engineer") {
                employee = new Engineer(res.name, res.email, res.id, res.github);
                console.log(employee);
            } else if (res.role === "Intern") {
                employee = new Intern(res.name, res.email, res.id, res.school);
                console.log(employee);
            }
            myTeam.push(employee);
            if (res.confirmAddEmployee) {
                return addEmployee(myTeam);
            } else {
                return myTeam;
            }
        })
}


const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
            err ? console.log(err) : console.log("HTML successfully created.")
    })
}

mainPrompt()
    .then(addEmployee).then(myTeam => {
        return createCards(myTeam)
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });



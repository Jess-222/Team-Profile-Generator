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
        console.log(myTeam)
    })
}



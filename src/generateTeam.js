const managersCard = (manager) => {
    return `<section class="managerCard">
    <h1>Manager</h1>
    <ul>
        <li>Name: ${manager.name}</li>
        <li>Email: ${manager.email}</li>
        <li>ID: ${manager.id}</li>
        <li>Office Number: ${manager.officeNumber}</li>
    </ul>
</section>`
}

const internsCard = (intern) => {
    return `<section class="internCard">
    <h1>Intern</h1>
    <ul>
        <li>Name: ${intern.name}</li>
        <li>Email: ${intern.email}</li>
        <li>ID: ${intern.id}</li>
        <li>School: ${intern.school}</li>
    </ul>
</section>`
}

const engineersCard = (engineer) => {
    return `<section class="engineerCard">
    <h1>Engineer</h1>
    <ul>
        <li>Name: ${engineer.name}</li>
        <li>Email: ${engineer.email}</li>
        <li>ID: ${engineer.id}</li>
        <li>GitHub: ${engineer.github}</li>
    </ul>
</section>`
}

const createCards = (data) => {
    var pageArray = [];
    for (let i = 0; i < data.length; i++) {
        // const employee = data[i];
        const role = data[i].getRole();
        console.log(role)
        // Calling managersCard
        if (role === 'Manager') {
            const managerCard = managersCard(data[i]);
            pageArray.push(managerCard);
        }
        if (role === 'Intern') {
            const internCard = internsCard(data[i]);
            pageArray.push(internCard);
        }
        if (role === 'Engineer') {
            const engineerCard = engineersCard(data[i]);
            pageArray.push(engineerCard);
        }

    }
    const employeeCards = pageArray.join('')
    const generateTeam = generateTeams(employeeCards);
    return generateTeam;
};

const generateTeams = (data) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link  rel="stylesheet" href="style.css"/>
        <title>Team Profile</title>
    </head>
    <body>
        ${data}
    </body>
    </html>`
}









export default createCards;
const managerCard = (manager) => {
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


const createCards = function(data) {
    pageArray = [];
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();
        if (role === 'Manager') {
            const managerCard = managerCard(employee);
            pageArray.push(managerCard);
        }
    }
    const employeeCards = pageArray.join('')
    const generateTeam = generateTeam(employeeCards);
    return generateTeam;
};

const generateTeam = () => {
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
        ${createCards(data)}
    </body>
    </html>`
}

export default createCards()
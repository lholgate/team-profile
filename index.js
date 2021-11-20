const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const getHtml = require('./src/html');

let team = [];
let response = {};
let cardHtml = "";

async function inqEngineer() {
    await inquirer.prompt([
        {
        type: "input",
        name: "name",
        message: "What is your Engineer's name?"
        },
        {
        type: "input",
        name: "id",
        message: "What is your Engineer's employee id?"
        },
        {
        type: "input",
        name: "email",
        message: "What is your Engineer's email address?"
        },
        {
        type: "input",
        name: "github",
        message: "What is your Engineer's github account?"
        }
    ]).then(function(data){
        console.log(data);
        team.push(new Engineer(data.name, data.id, data.email, data.github));
    });
}

async function inqIntern() {
    await inquirer.prompt([
        {
        type: "input",
        name: "name",
        message: "What is your Intern's name?"
        },
        {
        type: "input",
        name: "id",
        message: "What is your Intern's employee id?"
        },
        {
        type: "input",
        name: "email",
        message: "What is your Intern's email address?"
        },
        {
        type: "input",
        name: "school",
        message: "What is your Intern's school?"
        }
    ]).then(function(data){
        team.push(new Intern(data.name, data.id, data.email, data.school));
    });
}

async function addEmployee() {
    await inquirer.prompt([
        {
        type: "list",
        name: "EmployeeType",
        message: "Which type of employee would you like to enter?",
        choices: ['Engineer','Intern','Done']
        }
    ]).then(function(data){
        response = data;
    });

    switch(response.EmployeeType){
        case "Engineer":
            await inqEngineer();
            break;
        case "Intern":
            await inqIntern();
            break;
        case "Done":
            break;
    }   
    
    process.stdout.write("\u001b[3J\u001b[2J\u001b[1J");
    console.clear();
    console.log(team);
  
    if (response.EmployeeType != "Done") {
        response = {};
        await addEmployee();
    }

}

function getAttribute(employee) {
    if (employee.getTitle === "Manager") {
        console.log(employee.officeNumber);
        return `office number: ${employee.getOfficeNumber()}`;
    }

    if (employee.getTitle === "Intern") {
        return `school: ${employee.getSchool()}`;
    }

    if (employee.getTitle === "Engineer") {
        return `gitHub: ${employee.getGithub()}`;
    }

}

function getCardHtml() {
    cardHtml = '';
    let empAttr = '';
    for (i = 0; i < team.length; i++) {

        switch (team[i].getRole()) {
            case "Manager":
                empAttr = 'Office Number: ' + team[i].getOfficeNumber();
                break;
            case "Engineer":
                empAttr = 'GitHub: <a href="https://github.com/' + team[i].getGithub() +'" target="_blank">' + team[i].getGithub() + '</a>';
                break;
            case "Intern":
                empAttr = 'School: ' + team[i].getSchool();
                break;
        }
        
        cardHtml += `<div class="card justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4>${team[i].getName()}</h4>
            </div>
            <div class="col card-header">
                <h4>${team[i].getRole()}</h4 >
            </div >
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: ${team[i].getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</a></li>
                <li class="list-group-item"> ${empAttr}</li>
            </ul>
        </div > `;
    }
    return cardHtml;
}


async function init() {
    await inquirer.prompt([
        {
        type: "input",
        name: "name",
        message: "What is your name?"
        },
        {
        type: "input",
        name: "id",
        message: "What is your employee id?"
        },
        {
        type: "input",
        name: "email",
        message: "What is your email address?"
        },
        {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?"
        }
    ]).then(function(data){
        team.push(new Manager(data.name, data.id, data.email, data.officeNumber));
    });

    process.stdout.write("\u001b[3J\u001b[2J\u001b[1J");
    console.clear();

    await addEmployee();

    fs.writeFile("./dist/index.html", getHtml(getCardHtml()), (err) => {
        if (err)
            console.log(err);
        else {
            console.log("File written successfully\n");
            console.log(fs.readFileSync("./dist/index.html", "utf8"));
        }
    });

}

// Function call to initialize app
init();


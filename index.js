const inquirer = require('inquirer');
const fs = require('fs');
//load Class modules
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//load THML template
const getHtml = require('./src/html');

let team = [];
let response = {};
let cardHtml = "";

//Function to query and save Engineer data
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
        team.push(new Engineer(data.name, data.id, data.email, data.github));
    });
}

//function to query and save Intern data
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

// function to prompt if an Intern or Engineer will be added
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
    
    // resets position on console and clears screen
    process.stdout.write("\u001b[3J\u001b[2J\u001b[1J");
    console.clear();
    console.log(team);
    
    //If Manager is not done entering employees than loop
    if (response.EmployeeType != "Done") {
        response = {};
        await addEmployee();
    }

}
//functiont o build the card data for the HTML
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

//Function to initial the application and query Manager data
async function init() {
    // resets position on console and clears screen
    process.stdout.write("\u001b[3J\u001b[2J\u001b[1J");
    console.clear();

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

    // resets position on console and clears screen
    process.stdout.write("\u001b[3J\u001b[2J\u001b[1J");
    console.clear();
    console.log(team);

    await addEmployee();

    //Build the HTLM file and write it to dist directory
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


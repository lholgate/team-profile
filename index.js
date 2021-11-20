const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const getHtml = require('./src/html');

let team = [];
let response = {};

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
        choices: ['Engineer','Intern','Quit','Clear']
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
        case "Save":
            break;
        case "Clear":
            team = [];
            break;
    }   
    
    process.stdout.write("\u001b[3J\u001b[2J\u001b[1J");
    console.clear();
    console.log(team);
    //console.log(generateMarkdown(answers));

    // if (response.EmployeeType === "Save") {
    //     fs.writeFile("./dist/index.html", generateMarkdown(team), (err) => {
    //         if (err)
    //             console.log(err);
    //         else {
    //             console.log("File written successfully\n");
    //             console.log(fs.readFileSync("./dist/index.html", "utf8"));
    //         }
    //     });
    // }
    if (response.EmployeeType != "Quit") {
        response = {};
        await addEmployee();
    }

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

    await addEmployee();

    console.log(team);
    console.log(getHtml("hello"));

    for (i=0; i < team.length; i++) {
        console.log(team[i].getRole());
    };

}

// Function call to initialize app
init();
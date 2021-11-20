const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        //sets values of engineer object
        super(name, id, email);
        this.github = github;
    }
    //Returns title of engineer
    getRole() {
        return 'Engineer';
    }
    //returns github account fo engineer
    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;
const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
        //Sets values of intern object
        super(name, id, email);
        this.school = school;
    }
    //Returns title of intern
    getRole() {
        return 'Intern';
    }
    //Returns school of intern
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;
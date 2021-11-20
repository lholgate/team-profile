const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //Sets values of manager object
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    //Returns title of manager
    getRole() {
        return 'Manager';
    }
    //Returns office number of manager
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;
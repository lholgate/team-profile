class Employee {
    constructor(name, id, email){
        //Sets values for employee object
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //Returns name of employee
    getName(){
        return this.name;
    }
    //Returns id of employee
    getId(){
        return this.id;
    }
    //Returns email of employee
    getEmail(){
        return this.email;
    }
    //Returns title of employee
    getTitle(){
        return 'Employee';
    }
}

module.exports = Employee;
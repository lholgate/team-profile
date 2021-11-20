//Require Employee file
const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Instantiate the employee object', () => {
        // test the employee object is created
        it('Should return true if the object is created', () => {
            const result = new Employee();
            
            expect(typeof(result)).toBe("object");
        });
        
        // test values of employee object
        it('test the values pass to the class are stored in the object', () => {
            const result = new Employee('Lewis Holgate', 100, 'lholgate@gmail.com');

            expect(result.name).toEqual('Lewis Holgate');
            expect(result.id).toEqual(100);
            expect(result.email).toEqual('lholgate@gmail.com');
        })
    });

    describe('Test methods in class Employee', () => {
        it('Test getName method to return Employee name', () => {
            const obj = new Employee('Lewis Holgate', 100, 'lholgate@gmail.com');
            
            result = obj.getName();
            expect(result).toEqual('Lewis Holgate');
        });
        
        it('Test getId method to return Employee Id', () => {
            const obj = new Employee('Lewis Holgate', 100, 'lholgate@gmail.com');
            
            result = obj.getId();
            expect(result).toEqual(100);
        });
            
        it('Test getEmail method to return Employee email', () => {
            const obj = new Employee('Lewis Holgate', 100, 'lholgate@gmail.com');
            
            result = obj.getEmail();
            expect(result).toEqual('lholgate@gmail.com');
        });
            
        it('Test getTitle method to return Employee title', () => {
            const obj = new Employee('Lewis Holgate', 100, 'lholgate@gmail.com');
            
            result = obj.getTitle();
            expect(result).toEqual('Employee');
        });
    });

});

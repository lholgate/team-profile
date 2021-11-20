//Require Manager file
const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Instantiate the Manager object', () => {
        // test the Manager object is created
        it('Should return true if the object is created', () => {
            const result = new Manager();
            
            expect(typeof(result)).toBe("object");
        });
        
        // test values of Manager object
        it('test the values pass to the class are stored in the object', () => {
            const result = new Manager('Lewis Holgate', 100, 'lholgate@gmail.com', 1000);

            expect(result.name).toEqual('Lewis Holgate');
            expect(result.id).toEqual(100);
            expect(result.email).toEqual('lholgate@gmail.com');
            expect(result.officeNumber).toEqual(1000);
        })
    });

    describe('Test methods in class Manager', () => {
        it('Test getName method to return Manager name', () => {
            const obj = new Manager('Lewis Holgate', 100, 'lholgate@gmail.com', 1000);
            
            result = obj.getName();
            expect(result).toEqual('Lewis Holgate');
        });
        
        it('Test getId method to return Manager Id', () => {
            const obj = new Manager('Lewis Holgate', 100, 'lholgate@gmail.com', 1000);
            
            result = obj.getId();
            expect(result).toEqual(100);
        });
            
        it('Test getEmail method to return Manager email', () => {
            const obj = new Manager('Lewis Holgate', 100, 'lholgate@gmail.com', 1000);
            
            result = obj.getEmail();
            expect(result).toEqual('lholgate@gmail.com');
        });
            
        it('Test getRole method to return Manager title', () => {
            const obj = new Manager('Lewis Holgate', 100, 'lholgate@gmail.com', 1000);
            
            result = obj.getRole();
            expect(result).toEqual('Manager');
        });
            
        it('Test getOfficeNumber method to return Manager office number', () => {
            const obj = new Manager('Lewis Holgate', 100, 'lholgate@gmail.com', 1000);
            
            result = obj.getOfficeNumber();
            expect(result).toEqual(1000);
        });
    });

});

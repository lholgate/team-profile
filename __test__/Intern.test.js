//Require Intern file
const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Instantiate the Intern object', () => {
        // test the Intern object is created
        it('Should return true if the object is created', () => {
            const result = new Intern();
            
            expect(typeof(result)).toBe("object");
        });
        
        // test values of Intern object
        it('test the values pass to the class are stored in the object', () => {
            const result = new Intern('Lewis Holgate', 100, 'lholgate@gmail.com', 'UofU');

            expect(result.name).toEqual('Lewis Holgate');
            expect(result.id).toEqual(100);
            expect(result.email).toEqual('lholgate@gmail.com');
            expect(result.school).toEqual('UofU');
        })
    });

    describe('Test methods in class Intern', () => {
        it('Test getName method to return Intern name', () => {
            const obj = new Intern('Lewis Holgate', 100, 'lholgate@gmail.com', 'UofU');
            
            result = obj.getName();
            expect(result).toEqual('Lewis Holgate');
        });
        
        it('Test getId method to return Intern Id', () => {
            const obj = new Intern('Lewis Holgate', 100, 'lholgate@gmail.com', 'UofU');
            
            result = obj.getId();
            expect(result).toEqual(100);
        });
            
        it('Test getEmail method to return Intern email', () => {
            const obj = new Intern('Lewis Holgate', 100, 'lholgate@gmail.com', 'UofU');
            
            result = obj.getEmail();
            expect(result).toEqual('lholgate@gmail.com');
        });
            
        it('Test getRole method to return Intern title', () => {
            const obj = new Intern('Lewis Holgate', 100, 'lholgate@gmail.com', 'UofU');
            
            result = obj.getRole();
            expect(result).toEqual('Intern');
        });
            
        it('Test getSchool method to return Intern school', () => {
            const obj = new Intern('Lewis Holgate', 100, 'lholgate@gmail.com', 'UofU');
            
            result = obj.getSchool();
            expect(result).toEqual('UofU');
        });
    });

});

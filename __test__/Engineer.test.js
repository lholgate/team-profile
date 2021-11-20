//Require Engineer file
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Instantiate the Engineer object', () => {
        // test the Engineer object is created
        it('Should return true if the object is created', () => {
            const result = new Engineer();
            
            expect(typeof(result)).toBe("object");
        });
        
        // test values of Engineer object
        it('test the values pass to the class are stored in the object', () => {
            const result = new Engineer('Lewis Holgate', 100, 'lholgate@gmail.com', 'lholgate');

            expect(result.name).toEqual('Lewis Holgate');
            expect(result.id).toEqual(100);
            expect(result.email).toEqual('lholgate@gmail.com');
            expect(result.github).toEqual('lholgate');
        })
    });

    describe('Test methods in class Engineer', () => {
        it('Test getName method to return Engineer name', () => {
            const obj = new Engineer('Lewis Holgate', 100, 'lholgate@gmail.com', 'lholgate');
            
            result = obj.getName();
            expect(result).toEqual('Lewis Holgate');
        });
        
        it('Test getId method to return Engineer Id', () => {
            const obj = new Engineer('Lewis Holgate', 100, 'lholgate@gmail.com', 'lholgate');
            
            result = obj.getId();
            expect(result).toEqual(100);
        });
            
        it('Test getEmail method to return Engineer email', () => {
            const obj = new Engineer('Lewis Holgate', 100, 'lholgate@gmail.com', 'lholgate');
            
            result = obj.getEmail();
            expect(result).toEqual('lholgate@gmail.com');
        });
            
        it('Test getRole method to return Engineer title', () => {
            const obj = new Engineer('Lewis Holgate', 100, 'lholgate@gmail.com', 'lholgate');
            
            result = obj.getRole();
            expect(result).toEqual('Engineer');
        });
            
        it('Test getGithub method to return Engineer github account', () => {
            const obj = new Engineer('Lewis Holgate', 100, 'lholgate@gmail.com', 'lholgate');
            
            result = obj.getGithub();
            expect(result).toEqual('lholgate');
        });
    });

});

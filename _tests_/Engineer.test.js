const Engineer = require('../lib/Engineer.js');

test('create an employee object', () => {
    const engineer = new Engineer('Mike', 2, "mike@test.com");
  
    expect(typeof engineer.name).toBe('string');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(typeof engineer.email).toBe('string');  
});

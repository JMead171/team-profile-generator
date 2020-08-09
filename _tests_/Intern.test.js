const Intern = require('../lib/Intern.js');

test('create an employee object', () => {
    const intern = new Intern('Chris', 3, "chris@test.com");
  
    expect(typeof intern.name).toBe('string');
    expect(intern.id).toEqual(expect.any(Number));
    expect(typeof intern.email).toBe('string');  
});

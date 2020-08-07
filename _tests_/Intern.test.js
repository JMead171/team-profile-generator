const Intern = require('../lib/Intern.js');

test('create an employee object', () => {
    const intern = new Intern('Chris');
  
    expect(intern.name).toBe('Chris');
  });
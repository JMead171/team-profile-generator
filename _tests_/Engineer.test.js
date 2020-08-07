const Engineer = require('../lib/Engineer.js');

test('create an employee object', () => {
    const engineer = new Engineer('Chris');
  
    expect(engineer.name).toBe('Chris');
  });
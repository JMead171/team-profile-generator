const Manager = require('../lib/Manager.js');

test('create an employee object', () => {
    const manager = new Manager('Chris');
  
    expect(manager.name).toBe('Chris');
  });
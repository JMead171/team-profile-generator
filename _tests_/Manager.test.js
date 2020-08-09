const Manager = require('../lib/Manager.js');

test('create an employee object', () => {
    const manager = new Manager('Jeff', 4, "jeff@test.com");
  
    expect(typeof manager.name).toBe('string');
    expect(manager.id).toEqual(expect.any(Number));
    expect(typeof manager.email).toBe('string');  
});

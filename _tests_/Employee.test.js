const Employee = require('../lib/Employee.js');

test('create an employee object', () => {
    const employee = new Employee('Jeff');
  
    expect(employee.name).toBe('Jeff');
  });
const Employee = require('../lib/Employee.js');

test('create an employee object', () => {
    const employee = new Employee('Jeff', 1, "jeff@test.com");
    
    expect(typeof employee.name).toBe('string');
    expect(employee.id).toEqual(expect.any(Number));
    expect(typeof employee.email).toBe('string');  
  });
  
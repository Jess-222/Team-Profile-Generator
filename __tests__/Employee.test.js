// const Employee = require('../lib/Employee');


// test('properly fills in employee information', () => {
// expect(
//     Employee()
// ).toBe()
// });

const Employee = require("../lib/Employee");

test("Create employee", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});


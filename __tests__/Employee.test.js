import Employee from "../lib/Employee.js"
//const Employee = require('../lib/Employee.js')

test("checks that getName() method works", () => {
  const e = new Employee("Jessica", "jessica@gmail.com", 4,);
  expect(e.getName()).toEqual("Jessica");
});

test("checks that getId() method works", () => {
  const e = new Employee("Jessica", "jessica@gmail.com",  4);
  expect(e.getId()).toEqual(4);
});

test("checks that getEmail() method works", () => {
  const e = new Employee("Jessica", "jessica@gmail.com",  4);
  expect(e.getEmail()).toEqual("jessica@gmail.com");
});

test("checks that getRole() method works", () => {
  const e = new Employee("Jessica", "jessica@gmail.com",  4);
  expect(e.getRole()).toEqual("Employee");
});


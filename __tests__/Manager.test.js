import Manager from "../lib/Manager.js"
//const Manager = require('../lib/Manager.js')

test("checks that getOfficeNumber() method works", () => {
    const e = new Manager("Jessica", "jessica@gmail.com", 4, 122);
    expect(e.getOfficeNumber()).toEqual(122);
});

test("checks that getRole() method works", () => {
    const e = new Manager("Jessica", "jessica@gmail.com", 4, "Jessica123");
    expect(e.getRole()).toEqual("Manager");
});
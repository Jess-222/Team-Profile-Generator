// import Intern from "../lib/Intern.js"
const Intern = require('../lib/Intern.js')

test("checks that getSchool() method works", () => {
    const e = new Intern("Jessica", "jessica@gmail.com", 4, "UOFU");
    expect(e.getSchool()).toEqual("UOFU");
});

test("checks that getRole() method works", () => {
    const e = new Intern("Jessica", "jessica@gmail.com", 4, "Jessica123");
    expect(e.getRole()).toEqual("Intern");
});
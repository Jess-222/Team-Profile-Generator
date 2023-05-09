import Engineer from "../lib/Engineer.js"
//const Engineer = require('../lib/Engineer.js')

test("checks that getGithub() method works", () => {
  const e = new Engineer("Jessica", "jessica@gmail.com", 4, "Jessica123");
  expect(e.getGithub()).toEqual("Jessica123");
});

test("checks that getRole() method works", () => {
  const e = new Engineer("Jessica", "jessica@gmail.com",  4, "Jessica123");
  expect(e.getRole()).toEqual("Engineer");
});

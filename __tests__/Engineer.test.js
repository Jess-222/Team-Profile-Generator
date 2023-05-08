const Engineer = require("../lib/Engineer");


// test('properly fills in engineer information', () => {
// expect(
//     Engineer()
// ).toHaveProperty('../lib/Engineer.js', name, email, id, github)
// });

const Engineer = require("../lib/Engineer");

test("Can create Employee", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});


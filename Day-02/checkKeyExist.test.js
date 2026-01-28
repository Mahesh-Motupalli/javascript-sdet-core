const checkKeyExist = require("./checkKeyExist");

describe("Check Key Exist", () => {
  test.each([
    [{ a: 1, b: 2, c: 3 }, "a", true],
    [{ d: 1, e: 2, f: 3, g: 4 }, "g", true],
    [{ a: 1 }, "z", false],
    [{}, "a", false],
  ])("checkKeyExist(%o, %s) → %s", (obj, key, expected) => {
    expect(checkKeyExist(obj, key)).toBe(expected);
  });
});

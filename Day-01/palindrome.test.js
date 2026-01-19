const palindromeCheck = require("./palindrome");

describe("palindromeTest", () => {
  test("test a palindrome string", () => {
    expect(palindromeCheck("kayak")).toBe(true);
  });

  test("test a single character", () => {
    expect(palindromeCheck("a")).toBe(true);
  });

  test("test an empty string", () => {
    expect(palindromeCheck("")).toBe(true);
  });

  test("works with mixed case", () => {
    expect(palindromeCheck("mahesh")).toBe(false);
  });
});
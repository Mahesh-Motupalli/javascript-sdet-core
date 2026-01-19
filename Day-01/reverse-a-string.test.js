const reverseString = require("./reverse-a-string");

describe("reverseString", () => {
  test("reverses a normal string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("reverses a single character", () => {
    expect(reverseString("a")).toBe("a");
  });

  test("reverses an empty string", () => {
    expect(reverseString("")).toBe("");
  });

  test("works with mixed case", () => {
    expect(reverseString("JavaScript")).toBe("tpircSavaJ");
  });
});
const vowelCount = require("./vowel");

describe("vowelCount", () => {
  test.each([
    ["mahesh", 2],
    ["krishvith", 2],
    ["harini", 3],
    ["aeiouaeiou", 10],
    ["AEIOU", 5],
  ])("vowelCount(%s) -> %i", (input, expected) => {
    expect(vowelCount(input)).toBe(expected);
  });

  test("throws error for empty string", () => {
    expect(() => vowelCount("")).toThrow("Input cannot be empty");
  });
});

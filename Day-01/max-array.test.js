const maxArray = require("./max-array");

describe("maxArray", () => {
  test.each([
    [[1, 4, 5, 6, 2], 6],
    [[0, -1], 0],
    [[2], 2],
    [[-5, -2, -10], -2],
  ])("maxArray(%t) -> %i", (input, expected) => {
    expect(maxArray(input)).toBe(expected);
  });

  test("throws error for empty array", () => {
    expect(() => maxArray([])).toThrow("Array cannot be empty");
  });
});

const objToArray = require("./ObjToArray");

describe("objToArray", () => {
  test.each([
    [{ a: 1, b: 2 }, [["a", 1], ["b", 2]]],
    [{}, []],
    [{ x: 10 }, [["x", 10]]],
  ])("objToArray(%o) → %o", (input, expected) => {
    expect(objToArray(input)).toEqual(expected);
  });

  test("ignores inherited properties", () => {
     const parent = { a: 1 };
     const child = Object.create(parent);
     child.b = 2;

    expect(objToArray(child)).toEqual([["b", 2]]);
  });
});

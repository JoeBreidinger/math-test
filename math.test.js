import { describe, it, expect } from "vitest";
import { add, subtract, findMinIndex } from "./math";

// `describe` indicates a test suite.
describe("add", () => {
  // `it` or `test` is used for one test case.
  // Aim for one assertion per test.
  it("adds 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toEqual(3);
  });

  /*
   An **edge case** is a scenario at the "edge" of expected behavior.
   Common edge cases to consider are:
   - zero, empty, or null inputs
   - unusual input, such as incorrect types
  */

  it("handles 0: 0 + 1 = 1", () => {
    expect(add(0, 1)).toEqual(1);
  });

  it("handles negative numbers: -1 + -1 = -2", () => {
    expect(add(-1, -1)).toEqual(-2);
  });

  it("handles floating point numbers: 1 + 0.5 = 1.5", () => {
    // Due to how floating point numbers are represented in memory,
    // it's not a good idea to use exact equality.
    // Try 1.2 + 1.23 in the browser console for an example.
    expect(add(1, 0.5)).toBeCloseTo(1.5);
  });

  // Test suites can be nested.
  describe("types", () => {
    it("returns NaN if num1 is not a number", () => {
      expect(add("1", 2)).toBeNaN();
    });

    it("returns NaN if num2 is not a number", () => {
      expect(add(1, "2")).toBeNaN();
    });

    it("returns a number", () => {
      expect(add(1, 2)).toBeTypeOf("number");
    });
  });

  /*
    Test cases can also be dynamically generated.
    Randomness should be used in combination with deterministic tests.
    It can help find edge cases or simulate a range of inputs.
  */
  describe("returns the correct sum for random numbers between -50 and 50", () => {
    for (let i = 0; i < 3; i++) {
      const num1 = Math.floor(Math.random() * 101) - 50;
      const num2 = Math.floor(Math.random() * 101) - 50;
      const expected = num1 + num2;

      it(`adds ${num1} + ${num2} to equal ${expected}`, () => {
        const result = add(num1, num2);
        expect(result).toEqual(expected);
      });
    }
  });
});

// TODO: Write the test suite for `subtract`.

describe.skip("findMinIndex", () => {
  it("returns the index (1) of the minimum value in [15, 8, 25]", () => {
    expect(findMinIndex([15, 8, 25])).toEqual(1);
  });

  it("returns -1 if the array is empty", () => {
    expect(findMinIndex([])).toEqual(-1);
  });

  // TODO: Write more tests.
});

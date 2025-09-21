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
describe("subtract", () => {
  it("returns a number", () => {
    expect(subtract(2, 1)).toBeTypeOf("number");
  });

  it("returns NaN if num1 is not a number", () => {
    expect(subtract("1", 2)).toBeNaN();
  });
  it("returns NaN is num2 is not a number", () => {
    expect(subtract(1, "2")).toBeNaN();
  });

  describe("zeroes", () => {
    it("handles 0: 2 - 0 = 2", () => {
      expect(subtract(2, 0)).toEqual(2);
    });
    it("handles 0: 0 - 2 = -2", () => {
      expect(subtract(0, 2)).toEqual(-2);
    });
  });

  describe("negatives", () => {
    it("handles negative numbers: 2 - -2 = 4", () => {
      expect(subtract(2, -2)).toEqual(4);
    });
    it("handles negative numbers: -3 - -2 = -1", () => {
      expect(subtract(-3, -2)).toEqual(-1);
    });
  });

  describe("floating numbers", () => {
    it("handles decimals: 4.5 - 2.3 = 2.2", () => {
      expect(subtract(4.5, 2.3)).toEqual(2.2);
    });
    it("handles negative decimals: -4.5 - -2.3 = 2.2", () => {
      expect(subtract(-4.5, -2.3)).toEqual(-2.2);
    });
  });
  describe("returns the correct difference for random numbers between -50 and 50", () => {
    for (let i = 0; i < 4; i++) {
      const num1 = Math.floor(Math.random() * 101) - 50;
      const num2 = Math.floor(Math.random() * 101) - 50;
      const expected = num1 - num2;

      it(`adds ${num1} - ${num2} to equal ${expected}`, () => {
        const result = subtract(num1, num2);
        expect(result).toEqual(expected);
      });
    }
  });
});

describe("findMinIndex", () => {
  it("returns the index (1) of the minimum value in [15, 8, 25]", () => {
    expect(findMinIndex([15, 8, 25])).toEqual(1);
  });

  it("returns -1 if the array is empty", () => {
    expect(findMinIndex([])).toEqual(-1);
  });

  it("returns the index of a single number", () => {
    expect(findMinIndex([1])).toEqual(0);
  });
  it("returns the index of two equal numbers", () => {
    expect(findMinIndex([1, 1])).toEqual(0);
  });
  // describe("types", () => {
  //   it("returns NaN if num1 is not a number", () => {
  //     expect(findMinIndex(["1", 2])).toBeNaN();
  //   });

  //   it("returns NaN if num2 is not a number", () => {
  //     expect(findMinIndex([1, "2"])).toBeNaN();
  //   });
  // });
});

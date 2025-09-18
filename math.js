/**
 * @param {number} num1
 * @param {number} num2
 * @returns {number} the sum of `num1` and `num2`
 */
export function add(num1, num2) {
  if (!(typeof num1 === "number" && typeof num2 === "number")) {
    return NaN;
  }
  return num1 + num2;
}

/**
 * @param {number} num1
 * @param {number} num2
 * @returns {number} the difference between `num1` and `num2`
 */
export function subtract(num1, num2) {
  if (!(typeof num1 === "number" && typeof num2 === "number")) {
    return NaN;
  }
  return num1 - num2;
}

/**
 * @param {number[]} numbers
 * @returns {number} the index of the minimum value in `numbers`
 * @returns {number} -1 if `numbers` is empty
 */
export function findMinIndex(numbers) {}

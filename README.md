# Math Test

After pulling an all-nighter to study for a math test, you're not sure if you even remember how to add or subtract two numbers! Luckily, you do know how to code, so you whip up a quick program to test yourself before the exam.

## Set up the project

This is a **pair-programming** activity. Before you start, designate one person to be the initial Driver. Everyone else will be a Navigator.

1. Navigate your terminal to the repository folder, or open the integrated terminal in VS Code.

> [!WARNING]
>
> Make sure your terminal is in the repository folder itself, not its parent directory! The output of `pwd` should end in `MathTest`.

2. In the terminal, run `npm install` to download the dependencies for this project. These dependencies will be installed to a folder named `node_modules`.
3. Run `npm run test`. This will run the `"test"` script in `package.json`. Your terminal should show some passing test cases. This will automatically update as you work on this activity.

## Read a test suite

Given two numbers `num1` and `num2`, `add` returns the sum of adding `num1` and `num2`. The function has already been written in `math.js`.

A documented test suite for `add` has already been written in `math.test.js`. Take some time to read through the code before continuing to the next section.

## Write a test suite

Given two numbers `num1` and `num2`, `subtract` returns the result of subtracting `num2` from `num1`. It has already been written in `math.js`.

In `math.test.js`, write a test suite for `subtract` that includes at least:

4. Use `describe` to create a test suite for `subtract`.
5. In that test suite, write tests cases to check that `subtract` returns `NaN` if either input is not a number.
6. Write a test case to check that `subtract` returns a number.
7. Write test cases to check that `subtract` works correctly for positive numbers, negative numbers, and floating point numbers.
8. Write a test case to check that `subtract` works correctly when given two randomly generated numbers.

If you've written the test cases correctly, your terminal should indicate that `subtract` passes all of the tests!

> [!NOTE]
>
> The intention of this assignment is _not_ to write exhaustive test cases for every single possible scenario. Instead, the aim is for you to start anticipating _how_ code will break, because code _will_ break!

Designate a new person to be the Driver before continuing to the next section.

## Write code to pass a test suite

**Test driven development** (TDD) entails writing tests _before_ writing the code to pass those tests. TDD helps catch bugs early in the process and gives developers instant feedback on their code as they write it.

In `math.test.js`, a simple test suite for `findMinIndex` has been written for you.

9.  Remove the `.skip` from `describe.skip`. This will enable the test suite. In your terminal, you should see some failing test cases.
10. Add at least two more tests to the test suite for `findMinIndex`. Think about potential edge cases!
11. In `math.js`, complete the `findMinIndex` function so it passes all the tests!

> [!TIP]
>
> Keep track of both the index _and_ the value of the minimum element as you iterate through the array.

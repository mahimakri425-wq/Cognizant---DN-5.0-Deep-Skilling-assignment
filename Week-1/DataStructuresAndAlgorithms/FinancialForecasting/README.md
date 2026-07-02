# Exercise 7 – Financial Forecasting

## Objective
Predict the future value of an investment using recursion.

## Recursion
Recursion is a technique where a function calls itself until a base condition is met.

## Algorithm
1. Accept present value, growth rate, and years.
2. If years = 0, return the current value.
3. Otherwise, multiply the value by (1 + growthRate).
4. Call the function recursively with years - 1.
5. Return the final future value.

## Time Complexity
O(n)

## Space Complexity
O(n)

## Optimization
- Use an iterative loop to reduce space complexity to O(1).
- Use the compound interest formula with `Math.Pow()` for direct computation.
function fibonacciIterative(limit) {
  if (limit < 0) return "Please enter a non-negative number";

  let fibSeries = [];
  let a = 0,
    b = 1;

  while (a <= limit) {
    fibSeries.push(a);
    [a, b] = [b, a + b];
  }

  return fibSeries;
}

// Example usage with user input
const limit = parseInt(prompt("Enter the upper limit for Fibonacci series:"));
console.log(`Fibonacci series up to ${limit} is ${fibonacciIterative(limit)}`);

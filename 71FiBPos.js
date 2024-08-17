//To calculate the Fibonacci number at a specific position
function fibonacciIterative(n) {
  if (n < 0) return "Please enter a non-negative number";
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0,
    b = 1,
    fib;
  for (let i = 2; i <= n; i++) {
    fib = a + b;
    a = b;
    b = fib;
  }
  return fib;
}

// Example usage with user input
const position = 3;

console.log(
  `Fibonacci number at position ${position} is ${fibonacciIterative(position)}`
);

function fibonacciRecursive(n) {
  if (n < 0) return "Please enter a non-negative number";
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  let series = fibonacciRecursive(n - 1);
  let nextNumber = series[series.length - 1] + series[series.length - 2];

  if (nextNumber <= n) {
    series.push(nextNumber);
  }

  return series;
}

// Example usage with user input
const limit = 25;
console.log(`Fibonacci series up to ${limit} is ${fibonacciRecursive(limit)}`);

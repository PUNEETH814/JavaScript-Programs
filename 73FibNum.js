//To generate a Fibonacci series of the first 10 numbers,
function fibonacciSeries(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  let fibSeries = [0, 1];
  while (fibSeries.length < n) {
    const nextNumber =
      fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2];
    fibSeries.push(nextNumber);
  }
  return fibSeries;
}

// Generate Fibonacci series of 10 numbers
const numberOfTerms = 20;
console.log(
  `Fibonacci series of ${numberOfTerms} numbers is ${fibonacciSeries(
    numberOfTerms
  )}`
);

/** RECURSION CODE 
 * function fibonacciRecursive(n, fibSeries = [0, 1]) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return fibSeries;

    if (fibSeries.length < n) {
        const nextNumber = fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2];
        fibSeries.push(nextNumber);
        return fibonacciRecursive(n, fibSeries);
    }
    
    return fibSeries;
}

// Generate Fibonacci series of 10 numbers
const numberOfTerms = 10;
console.log(`Fibonacci series of ${numberOfTerms} numbers is ${fibonacciRecursive(numberOfTerms)}`);

 */

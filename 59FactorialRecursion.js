/*Factorial Recursion Most asked Recursion Question for DSA Interview  */

function Factorial(n) {
  if (n === 0) {
    //basecase
    return 1;
  }
  return n * Factorial(n - 1);
}

console.log(Factorial(5));

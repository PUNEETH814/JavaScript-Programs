function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function printFirstNPrimes(n) {
  let count = 0;
  let num = 2;

  while (count < n) {
    if (isPrime(num)) {
      console.log(num);
      count++;
    }
    num++;
  }
}

// Example usage
const n = 10;
printFirstNPrimes(n);

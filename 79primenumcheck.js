function isPrime(num) {
  // Handle edge cases for numbers less than 2
  if (num <= 1) return false;

  // Loop from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // If num is divisible by any number between 2 and sqrt(num), it is not prime
    if (num % i === 0) {
      return false;
    }
  }
  // If no divisor was found, the number is prime
  return true;
}

// Example usage
const number = 29;
if (isPrime(number)) {
  console.log(`${number} is a prime number.`);
} else {
  console.log(`${number} is not a prime number.`);
}

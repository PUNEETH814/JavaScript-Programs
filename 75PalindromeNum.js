function isPalindromeNumber(num) {
  // Convert the number to a string
  const numStr = num.toString();

  // Check if the string representation of the number is equal to its reverse
  const reversedNumStr = numStr.split("").reverse().join("");

  return numStr === reversedNumStr;
}

// Example usage
const numberToCheck = 12321;
console.log(isPalindromeNumber(numberToCheck)); // Output: true

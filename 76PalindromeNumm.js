function isPalindromeNumber(num) {
  // Handle negative numbers and zero
  if (num < 0) return false;

  // Initialize variables for reversing the number
  let originalNum = num;
  let reversedNum = 0;

  // Reverse the number
  while (originalNum > 0) {
    let digit = originalNum % 10; // Get the last digit
    reversedNum = reversedNum * 10 + digit; // Append the digit to the reversed number
    originalNum = Math.floor(originalNum / 10); // Remove the last digit from the original number
  }

  // Check if the reversed number is equal to the original number
  return reversedNum === num;
}

// Example usage
const numberToCheck = 12321;
console.log(isPalindromeNumber(numberToCheck)); // Output: true

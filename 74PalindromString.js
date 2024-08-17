function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Check if the cleaned string is equal to its reverse
  const reversedStr = cleanedStr.split("").reverse().join("");

  return cleanedStr === reversedStr;
}

// Example usage
const stringToCheck = "A man, a plan, a canal, Panama";
console.log(isPalindrome(stringToCheck)); // Output: true

function bubbleSortString(str) {
  // Convert the string to an array of characters
  let arr = str.split("");
  let n = arr.length;

  // Perform Bubble Sort
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap the characters if they are in the wrong order
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  // Convert the sorted array back to a string
  return arr.join("");
}

// Example usage
let str = "bubble";
let sortedStr = bubbleSortString(str);
console.log(sortedStr); // Output: "bbeluu"

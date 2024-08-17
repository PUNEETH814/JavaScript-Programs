function bubbleSortNumbers(arr) {
  let n = arr.length;

  // Bubble Sort algorithm
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap the numbers
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

// Example usage
let numbers = [64, 34, 25, 12, 22, 11, 90];
let sortedNumbers = bubbleSortNumbers(numbers);
console.log(sortedNumbers); // Output: [11, 12, 22, 25, 34, 64, 90]

/* Create an array with range of Numbers  Input start=1, end=5*/

function rangeOfNumber(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumber(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

console.log(rangeOfNumber(1, 5));

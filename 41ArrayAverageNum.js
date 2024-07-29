/* write a arrow function named arrayAverage that accepts an array of no and return the average of those numbers */

let arr = [2, 3, 4, 5];

let arrayAverage = (arr) => {
  let total = 0;
  for (let i of arr) {
    total += i;
  }
  return total / arr.length;
};

console.log(arrayAverage(arr));

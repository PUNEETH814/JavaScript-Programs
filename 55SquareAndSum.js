/* Square and sum the array element using arrow function and average of array */

let nums = [1, 2, 3, 4];
let Square = nums.map((el) => {
 return el * el;
});
console.log(Square);

let sum = Square.reduce((acc, el) => {
  return acc + el;
});
let avg = sum / nums.length;
console.log(avg);

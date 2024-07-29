/* write a program to find sum of digit */

// let num = 123;
// let numString = num.toString();
// let sum = 0;
// for (let i = 0; i < numString.length; i++) {
//   sum = sum + parseInt(numString[i]);
// }
// console.log(sum);

//arr.length iterate over the array last element and arr.length prints arr length but when wanted its index we will use arr.length -1 as array are 0 based indexing

let num = 123;
let sum = 0;
let copy = num;
while (copy > 0) {
  digit = copy % 10; //last element removed and stroed in digit variable
  sum += digit; // digit variable will be added to sum variable
  copy = Math.floor(copy / 10); //copy variable 22350302.3 decimal point will be removed for next iteration
}
console.log(sum);

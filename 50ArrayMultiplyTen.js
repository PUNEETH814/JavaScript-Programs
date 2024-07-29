/* Check if all numbers in an array are mulitply of 10 */

let num = [10, 20, 30, 40];
let ans = num.every((el) => el % 10 === 0);
console.log(ans);

/* Write a Program to check if a number have same last digit 
example 32 & 47852 have the same last digit ie 2*/

let num1 = 321422;
let num2 = 4728532;
if (num1 % 10 == num2 % 10) {
  console.log("number have same last digit which is", num1 % 10);
} else {
  console.log("number dont have same last digit");
}

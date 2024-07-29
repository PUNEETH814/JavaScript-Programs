/* write a program to find larget of three number */

let a = 1;
let b = 0;
let c = 2;

if (a > b) {
  if (a > c) {
    console.log("a is greater");
  } else {
    console.log("c is greater");
  }
} else if (b > a) {
  if (b > c) {
    console.log("b is greater");
  } else {
    console.log("c is greater");
  }
} else {
  console.log("all are equal");
}

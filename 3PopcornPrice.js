/* Create a system to calculate popcorn prices based on the size customer needs 
if size ix XL - price is Rs:250/-, 
if size is L - price is Rs:200/-
if size is M - price is Rs:100/-
if size is S - price is Rs:50/- */

//else if check only if above statement is false

let size = "l";

if (size === "xl") {
  console.log("Rs:250/-");
} else if (size === "l") {
  console.log("Rs:200/-");
} else if (size === "m") {
  console.log("Rs:100/-");
} else if (size === "s") {
  console.log("Rs:50/-");
} else {
  console.log("Wrong Input");
}

/* Destructuring - storing value of array or object into multiple variables 
NOTE: if variable has so many value then we use spread return all others in array*/

let arr = ["a", "b", "c", "d", "e", "f", "g"];
let [winner, runner, secondruner, ...others] = arr;
console.log(winner);
console.log(runner);
console.log(secondruner);
console.log(others);

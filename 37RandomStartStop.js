/* program to print random number from start to stop */
let start = 100;
let stops = 200;
function randomNumber(start, end) {
  let diff = end - start;
  return Math.floor(Math.random()* diff) + start;
}

console.log(randomNumber(start, stops));

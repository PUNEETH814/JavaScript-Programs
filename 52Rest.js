/* Rest are opposite to Spread - rest are passed as an parameter to accept many values argument are values passed in it (Opposite to Spread) */

// function sum(...args) {
//   for (let i = 0; i < args.length; i++) {
//     console.log("you gave us:", args[i]);
//   }
// }

// sum(1);
// sum(22);

//creating copy of Math.min function
function min(...args) {
  return args.reduce((min, el) => {
    if (min > el) {
      return el;
    } else {
      return min;
    }
  });
}

console.log(min(31,43,432,9213,1232,543,2,123,1))
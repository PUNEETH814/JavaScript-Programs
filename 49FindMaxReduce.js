/* Finding maximum in an array */

let arr = [9999, 8, 2, 123, 999];

//using for of loop

// function maximum(arr) {
//   let max = 0;
//   for (let i of arr) {
//     if (i > max) {
//       max = i;
//     }
//   }
//   console.log(max)
// }
// maximum(arr);

//using for loop

// function maximum(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   console.log(max);
// }
// maximum(arr);

//using reduce method

function maximum(arr) {
  let max = arr.reduce((max, el) => {
    if (max > el) {
      return max;
    } else {
      return el;
    }
  });
  console.log(max);
}

maximum(arr)


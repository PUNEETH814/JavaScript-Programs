/* Filter Method -- selects element that meets specfic condition and return new array with different length from original */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let even = arr.filter((el) => {
  return el % 2 === 0;
});

console.log(even);

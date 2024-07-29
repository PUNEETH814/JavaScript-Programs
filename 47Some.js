/* Some Method -- same as logical or || return true if some of elements satisfy the condition */

let arr = [2, 4, 6, 1];

let check = arr.some((el) => {
  return el % 2 !== 0;
});

console.log(check);

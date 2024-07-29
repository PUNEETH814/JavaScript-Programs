/*find the largest number in an array with only position number */
let arr = [1, 2, 3, 4, 5, 6, 7];
let num = 0;
for (let i = 0; i <= arr.length; i++) {
  if (num < arr[i]) {
    num = arr[i];
  }
}
console.log(num);

/*write a program that returns an element that is larger than the number given*/

let arr = [2, 1, 5, 2, 4, 8, 2];
let num = 5;
function largeElement(arr, num) {
  for (let i of arr) {
    let res = 0;
    if (i > num) {
      res = i;
      console.log(res);
    }
  }
}

largeElement(arr, num);

//for of loop
//iterate direct element rather than index
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>num){
// console.log(arr[i])
// }

/*write a program to delete all occurance of element num in a given array 
eg: [1,2,3,5,2,4,8,2] n=2 */

let arr = [1, 2, 3, 5, 2, 4, 8, 2];
n = 2;
for (let a of arr) {  //for(let a=0;a<=arr.length-1;a++)
  if (arr[a] === n) {
    arr.splice(a, 1); //splice(start,deleteCount,addElem)
  }
}
console.log(arr)
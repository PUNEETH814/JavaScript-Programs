/*Nested loop array */
// let arr = [['a','b','c','d'],[1,2,3,4],['I','II','III',"IV"]];
// for(let i of arr){
//     console.log(i)
// }
//prints nested array in array form itself but in method its not like that prints in order

//2method
let arr = [
  ["a", "b", "c", "d"],
  [1, 2, 3, 4],
  ["I", "II", "III", "IV"],
];

for (let i = 0; i < arr.length ; i++) {
  console.log(`array index at ${i}`);
  for (let k = 0; k < arr[i].length ; k++) {
    console.log(arr[i][k]);
  }
}

//3method
// let arr = [['a','b','c','d'],[1,2,3,4],['I','II','III',"IV"]];
// for(let i of arr){
//     for(let x of i){
//       console.log(x)
//     }
// }
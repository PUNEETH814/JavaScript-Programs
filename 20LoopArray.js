/* Loops with array */

let arr =["apple","ball","cat","dog","fish"];
for(let i=0; i<arr.length-1;i++){
    console.log(`array element at Index ${i} is ${arr[i]}`);
}

//2method
// let arr =["apple","ball","cat","dog","fish"];
// for(let i of arr){
//     console.log(`array element at Index ${i}`);
// }

//3method
// let arr = ["apple", "ball", "cat", "dog", "fish"];
// for (let [index, value] of arr.entries()) {
//     console.log(`array element at Index ${index} is ${value}`);
// }
//arr.entries() returns an iterator object with pairs of indices and values.
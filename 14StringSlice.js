/* for given start state of array change it to final state
start : ["jan","jul","march","aug"]
final : ["jul","june","march","aug"] */


//--------------using shift and unshift-----------
// let a = ["jan", "jul", "march", "aug"];
// a.shift();
// a.shift();
// a.unshift("jul", "june");
// console.log(a);

//----------------using splice----------------
let a = ["jan","jul","march","aug"];
a.splice(0,2,"jul","june") //if we use console here it self means it given del element
console.log(a)

//--------without using builtin function removing first 2element----------
// let a = ["jan", "jul", "mar", "aug"];
// // Create a new array without using push
// let newArray = [a[2], a[3]];
// console.log(newArray);

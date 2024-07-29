/*Reduce Methodd reduces the array to a single value using 2 variable parameter 
accumulator and element accumlator term often used in context of functional programming and array manipulation it refers to variable that is used to accumulate or gather values while iterating over an array or a collection and this variable is updated or modified in each iteration by applying certain condition */

let arr = [1,2,3];

let reduce = arr.reduce((acc,el)=>{
    return acc + el;
})

console.log(reduce)

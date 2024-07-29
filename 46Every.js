/* Every same as logical AND && return true if every element of array gives true for some function else return false */

let arr = [2,4,6,1];

 let check = arr.every((el)=>{
    return el%2 == 0;
 })

 console.log(check)
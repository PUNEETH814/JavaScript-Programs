/* Map Method 
-- Transforms each element and return a new array with same length as original*/

let num = [1, 2, 3];

// num.map((el)=>{
//    console.log(el*2);
// })

let double = num.map((el) => {
  return el * 2;
});
console.log(double);

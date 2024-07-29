/* write a function that concatenate all string */

function conCat(arr) {
  let res="";
  for (let i = 0; i < arr.length; i++) {
    res  = res + arr[i]
  }
  return res
}

let arr = ["hi", "hello", "howareyou"];
console.log(conCat(arr))

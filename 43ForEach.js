/* For Each Method -- its an array method similar to for of loop used iterate array over the elements*/

// let arr = [1,2,3,4,5];
// let print = function(el){
//     console.log(el)
// };

// arr.forEach(print)

let arr = [
  {
    name: "abc",
    marks: 99,
  },
  {
    name: "xyz",
    marks: 100,
  },
  {
    name: "pqr",
    marks: 89,
  },
];

arr.forEach((stu) => {
  //here stu is indiviual objects
  console.log(stu.marks);
});

// for(let stu of arr){
//     console.log(stu.marks);
// }

/*In a for...of loop, you can use the break statement to exit the loop prematurely, while in the forEach method, you cannot directly break out of the loop. The forEach method will iterate over all elements of the array unless an exception is thrown. for...of loop doesn't return any value by default. forEach method always returns undefined, regardless of what the callback function returns. */

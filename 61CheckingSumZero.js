//Checking Sum Zero - Problem 1

//[-5,-4,-3,-2,0,2,4,6,8] -> input (Sorted array)
//[?,?] -> output (the pair sum should be zero)([-4,4]->Zero)

function getSumPairZero(array) {
  for (let number of array) {
    console.log("outer loop");
    for (let j = 0; j < array.length; j++) {
      console.log("Inner loop");
      if (number + array[j] === 0) {
        return [number, array[j]];
      }
    }
  }
}

let result = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);

/* Here time Complexity is O(n^2)-> Quadratic if the size of the input data doubles, the execution time roughly quadruples.  this usually occurs when nested loops are used with each loop iterating over the entire input data set To make it O(n) Linear time complexity to make the the process in a single loop  */

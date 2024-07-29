//Count Unique Numbers in below already sorted array  (Without Using Built-in Function)
//Input ->[1,1,2,2,3,4,4,5,6,7,8]
//Output -> 8

function countUnique(array) {
  if (array.length > 0) {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1; //beacuase array i=0 zero index
  } else {
    throw new Error("Array is Empty");
  }
}

const check = countUnique([]);
console.log(check);

//Time Complexity O(n) linear

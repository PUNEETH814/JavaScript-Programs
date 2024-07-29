//String Anagram -> (Anagram means Num of length same and Num of Letter same only arrangment different )
//hello -> 'llheo' -> True
//puneeth -> 'eeethpun' -> false

/* Anagram Condition
1. Length check for both String
2. letter check 'hello' {h:1,e:1,l:2,o:1}  ->  {h:0,e:0,l:0,o:0} True */

//note object counter[letters] or counter.letters can use either square bracket or dot method

function isAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  let counter = {};
  for (let letters of string1) {
    counter[letters] = (counter[letters] || 0) + 1;
    // console.log(counter[letters]);
  }
  for (let items of string2) {
    if (!counter[items]) {
      return false;
    }
    counter[items] = counter[items] - 1;
  }
  return true;
}

const check = isAnagram("hello", "llheo");
console.log(check);

/* Time Complexity as we are running two loops seperately not nested loop so it is linear TC O(n) */

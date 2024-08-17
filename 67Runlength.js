/*The problem statement requires creating a function that compresses a given string using Run-Length Encoding (RLE)

Problem Statement
Run-Length Encoding (RLE): This is a form of data compression where consecutive repeating characters are stored as a single character and the number of repetitions. For example, the string "wwwggopp" would be compressed to "3w2g1o2p", where 3w means "three 'w' characters", 2g means "two 'g' characters", and so on.



 */

// code goes here
function runLengthEncode(s) {
  let encoded = "";
  let count = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++;
    } else {
      encoded += count + s[i - 1];
      count = 1;
    }
  }

  encoded += count + s[s.length - 1];
  return encoded;

  //Parse the encoded string into segments
  //   let segments = [];
  //   for (let i = 0; i < encoded.length; i += 2) {
  //     let count = encoded[i];
  //     let char = encoded[i + 1];
  //     segments.push({ char, count });
  //   }

  //   // Sort segments by character
  //   segments.sort((a, b) => a.char.localeCompare(b.char));

  //   // Reconstruct the encoded string
  //   let sortedEncoded = segments
  //     .map((segment) => segment.count + segment.char)
  //     .join("");

  // return sortedEncoded;
}

console.log(runLengthEncode("hellooo"));

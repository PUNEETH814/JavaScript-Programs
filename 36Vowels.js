/* program to count number of vowels in a string */

let str = "Puneeth";

function vowels(str) {
  let vowels = "";
  let count = 0;
  for (let i of str) {
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
      count++;
      vowels = vowels + i;
    }
  }
  console.log(
    `the number of vowels appeared is ${count} and vowels are ${vowels}`
  );
}

vowels(str);

// function countVowels(str){
//     let count = 0;
//     for(let i=0;i<str.length;i++){
//         if(str.charAt(i) == 'a'|| str.charAt(i) == 'e'||str.charAt(i) == 'i'||str.charAt(i) == 'o'||str.charAt(i) == 'u'){
//             count++
//         }
//     }
//     return console.log(count)
// }

// countVowels(str)

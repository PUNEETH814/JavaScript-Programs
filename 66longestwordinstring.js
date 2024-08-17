/* Problem Statement Explanation:
Function Objective:
The goal is to write a function, StringChallenge(sen), that takes a string (sen) as an input, identifies the longest word in the string, and returns a formatted string that combines the longest word and a ChallengeToken, both in reverse order, separated by a colon.

Input Conditions:

The string can contain words, numbers, and punctuation.
Words may include letters and numbers.
Punctuation should be ignored.
If there are multiple words with the same length, return the first one that appears.
The input string will not be empty.
Output:

The function should return a formatted string where the longest word is reversed and combined with the reversed ChallengeToken, separated by a colon. 

const challengeToken = "u6n32jifb";*/

function StringChallenge(sen) {
  // code goes here
  let words = sen.match(/\w+/g);

  let longestWord = words[0];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  const challengeToken = "u6n32jifb";

  const reversedLongestWord = longestWord.split("").reverse().join("");
  const reversedChallengeToken = challengeToken.split("").reverse().join("");

  const finalOutput = `${reversedLongestWord} : ${reversedChallengeToken}`;

  return finalOutput;
}

// keep this function call here
console.log(StringChallenge("hello i am puneeth"));

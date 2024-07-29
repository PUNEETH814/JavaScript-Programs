/* write a functiob to extract unique character in a string */
let strs = "abbcdaeffab";

function uniqueStr(strs) {
  let ans = "";
  for (i of strs) {
    let currChar = i;
    if (ans.indexOf(currChar) == -1) {
      //if Not exits
      ans += currChar; //ans = ans + currchar
    }
  }
  return console.log(ans);
}

uniqueStr(strs);

// function uniqueStr(strs) {
//     let ans = "";
//     for(let i =0;i<sts.length;i++){
//      let currChar = strs[i];
//      if(ans.indexOf(currChar) == -1){
//       ans+=currChar
//      }
//   }
//   return console.log(ans)
// }

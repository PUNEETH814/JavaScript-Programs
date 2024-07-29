/* write a program that accepts array list of country names and return the longest country name as output
 */

let countries = ["austraila", "germany", "united states of america"];

function longestName(countries) {
  let ans = "";
  for (country of countries) {
    if (ans.length > country.length) {
      ans = country;
    }
  }
  console.log(country);
}

longestName(countries);

// function longestName(country) {
//   let ansIdx = 0;
//   for (let i = 0; i < country.length; i++) {
//     let anslen = country[ansIdx].length;
//     let currlen = country[i].length;
//     if (currlen > anslen) {
//       ansIdx = i;
//     }
//   }
//   console.log(country[ansIdx]);
// }

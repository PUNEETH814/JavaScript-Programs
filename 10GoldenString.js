/* A String is "Golden String" if starts with the character 'A' or 'a' and has total length greater than 5 for a given string print if it is "Golden String" or not */

let str = "xnimal";

if ((str[0] === "a" || str[0] === "A") && str.length >= 5) {
  console.log("Golden String");
} else {
  console.log("Not");
}

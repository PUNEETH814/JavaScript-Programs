/* write a program to find number of digits in a number */
let num = 223503023;
let count = 0;
while (num != 0) {
  num = Math.floor(num / 10); //num=Math.floor(num / 10), so the last digit is removed.
  count++; //count value is incremented
}
console.log(`Number of digit: ${count}`);

//When you divide a decimal number by 10, it effectively shifts the decimal point one place to the left, truncating the last digit, when is divided with 223503023/10 10x2=20 so it becomes 22350302.3 ans  22350302.3 and math.floor remove decimal points

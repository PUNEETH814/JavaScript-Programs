/* print factorial of a number */
let num = 5;
let fact = 1;  //fact not zero if have zero means anything multiply with zero is zero
for(let i=1;i<=num;i++){ //1 not zero if have zero means anything multiply with zero is zero
   fact*=i //fact = fact * i
}
console.log(`factorial of number ${num} is ${fact}`)
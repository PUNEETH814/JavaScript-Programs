// Method 1: Using Arithmetic Operations
function swapWithArithmetic(a, b) {
  console.log("Before swap (Arithmetic): a =", a, ", b =", b);

  a = a + b;
  b = a - b;
  a = a - b;

  console.log("After swap (Arithmetic): a =", a, ", b =", b);
}

// Method 2: Using Bitwise XOR Operator
function swapWithXOR(a, b) {
  console.log("Before swap (XOR): a =", a, ", b =", b);

  a = a ^ b;
  b = a ^ b;
  a = a ^ b;

  console.log("After swap (XOR): a =", a, ", b =", b);
}

// Example usage
let num1 = 5;
let num2 = 10;

swapWithArithmetic(num1, num2);
swapWithXOR(num1, num2);

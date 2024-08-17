/* Generate random from k to n */

// let n = 10;
// let res = Math.floor(Math.random() * n) + 1;
// console.log(res);

/* Between 20 to 25*/

// let random = Math.floor(Math.random() * 5) + 20;
// console.log(random);

/* Start and end */

// let from = 50;
// let to = 100;
// let res = Math.floor(Math.random() * (to - from +1 )) + from;
// console.log(res);

/* roll dice */

// let dice = Math.floor(Math.random()*6) +1;
// console.log(dice);

/* loop,random() */

// let from = 50;
// let to = 100;
// let res;

// while ((res = Math.floor(Math.random() * (to - from + 1)) + from) !== 66) {
//   console.log(res);
// }
// console.log(res);
// console.log("Number 66 is generated!");

/* loop,random(),counter */

let from = 25;
let to = 70;
let res;
let attempt = 0;

while (true) {
  attempt++;
  res = Math.floor(Math.random() * (to - from + 1)) + from;
  console.log(res);

  if (res === 66) {
    console.log("66 found at " + attempt + " attempts");
    break;
  }
}

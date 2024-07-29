/* Print all odd numbers till n values*/

//1-method
// let n =10;
// for(let i=0;i<=n;i+=2){
//     console.log(i)
// }

//2method
// let n = 10;
// for(let i = 0;i<=n;i++){
//     if(i%2 !== 0){
//         console.log(i)
//     }
// }

//3method
// let n = 20;
// for(let i=n; i>=1; i-=2){
//     console.log(i)
// }

//4method
// let n = 20;
// for(let i=n;i>=1;i--){
//     if(i%2 !== 0){
//         console.log(i)
//     }
// }

//while loop
// let i = 1; //i initialization
// while (i <= 10) {  // i condition
//   console.log(i);   // perform operatiom
//   i += 2;       // updates
// }

//while loop with break
let i = 1;
while (i < 10) {
  if (i == 8) {
    break;
  }
  console.log(i);
  i++;
}

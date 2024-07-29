/* Write a switch statement to print the months in a quarter 
Months in quarter 1 = jan,feb,mar
Months in quarter 2 = apr,may,june
Months in quarter 3 = july,aug,sept
Months in quarter 4 = oct,nov,dec*/

let month = 11;

switch (month) {
  case 1:
    console.log("JAN,FEB,MAR");
    break;
  case 2:
    console.log("APR,MAY,JUN");
    break;
  case 3:
    console.log("JUL,AUG,SEP");
    break;
  case 4:
    console.log("OCT,NOV,DEC");
    break;
  default:
    console.log("wrong input");
}

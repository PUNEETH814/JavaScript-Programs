/*write a function that prints sum to 1 to n number */

function getSum(n){
    let sum =0;
    for(let i=0;i<=n;i++){
        sum+=i;  //sum = sum + i
    }
    return sum
}

console.log(getSum(3))
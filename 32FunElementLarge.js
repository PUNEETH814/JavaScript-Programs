/* write a function that returns an element larger in an array */

let arr = [9,4,1,32,123,99];
largerArr(arr);
function largerArr(arr){
    let res = 0;
    for(i of arr){
        if(i>res){
            res = i;
        }
    }
    console.log(res)
}
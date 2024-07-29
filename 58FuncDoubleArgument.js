/* write the function should return array values and all additional arguments doubled */

let arr = [[1, 2, 3], 4, 4];

const double = (first, ...rest) => [
    ...first,
    ...rest.map((el) => el * 2)
];

console.log(double(...arr));

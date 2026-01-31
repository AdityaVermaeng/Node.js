// console.log(process.argv)
let [, , a, b] = process.argv;
console.log(Number(a) + Number(b))


let num1 = Number(process.argv[2]);
let num2 = Number(process.argv[3]);
const sum = num1 + num2;

console.log(sum);
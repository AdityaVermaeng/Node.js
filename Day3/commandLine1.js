let fs = require('fs');
let p = process.argv[2];
let a = [];
for (let i = 1; i <= 10; i++) {
    a.push(`${p}x${i}=${p*i}`);

}
console.log(a);
fs.appendFileSync(`Demo/table.txt`, a.toString());
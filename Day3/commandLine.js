const fs = require("fs");
// fs.mkdirSync("Demo");
// fs.writeFileSync("");
// fs.writeFileSync(Demo/${process.argv[2], process.argv[3]);
fs.renameSync(process.argv[2], process.argv[3]);
// let a = fs.readFileSync(`Demo/${process.argv[2]}`, "utf-8");
// console.log(a);
if (process.argv[2] % 2 === 0) console.log("Even")
else console.log("odd");
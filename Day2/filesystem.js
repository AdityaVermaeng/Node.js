const fs = require('fs');
const path = require('path');

const pathDir = path.join(__dirname, "crud");
const filePath = `${pathDir}/demo.txt`; // create a file name demo.txt
console.log(filePath);

//-----------------Create---------------------//
// fs.writeFileSync(`${pathDir}/demo.txt`, "this is crud");
fs.writeFileSync(filePath, "this is crud") //this way and above wala same hain .koi bhi way use kar skte h


//---------------------read-------------------//
fs.readFile(filePath, 'utf8', (err, item) => {
    console.log(item);
})
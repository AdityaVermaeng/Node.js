const fs = require('fs');
const path = require('path');

const pathDir = path.join(__dirname, "crud");
const filePath = `${pathDir}/demo2.txt`; // create a file name demo.txt
console.log(filePath);

//-----------------Create---------------------//
// fs.writeFileSync(`${pathDir}/demo.txt`, "this is crud");
fs.writeFileSync(filePath, "this is crud") //this way and above wala same hain .koi bhi way use kar skte h


//---------------------read-------------------//
// fs.readFile(filePath, (err, item) => {
//         if (!err) console.log(item);
// }) // node contains his own buffer(Datatype) which user canot read the existing info so we use utf8 that user can easily read nad understand
fs.readFile(filePath, 'utf8', (err, item) => {
    console.log(item);
})


//---------------Update file data -----------------------//

fs.appendFile(filePath, 'file name is crud', (err) => {
    if (!err) console.log("file updated")
})



//-----------------file rename-----------//
fs.rename(filePath, `${pathDir}/demo3.txt`, (err) => {
    if (!err) console.log("File is renamed")
});



//---------------------delete file-------------------//
fs.unlinkSync(`${pathDir}/demo3.txt`);
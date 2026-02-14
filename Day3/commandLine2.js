let fs = require('fs');
const user = "abc";
const pass = 1234;
if (user === process.argv[2] && pass === process.argv[3]) {
    console.log("Logged in")

} else {
    console.log("enter valid username and password");
}
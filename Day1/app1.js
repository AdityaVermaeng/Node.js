const { log } = require("console");
const http = require("http");
http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Welcome to Home Page");
    } else if (req.url === "/about") {
        res.write("This is about page");
    } else if (req.url === "/contact") {
        res.write("Contact here for more details");
    } else if (req.url === "serivce") {
        res.write("Service page...!!!!")
    } else {
        res.write("404 page is not ...!!!")
    }
    res.end();
}).listen(3000, () => {
    console.log("Server is started....!!!!!!")
})
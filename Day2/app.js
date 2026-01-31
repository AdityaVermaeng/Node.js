//check URL dynamically

const http = require("http");
http.createServer((req, res) => {
    if (req.url.startsWith("/user/")) {
        //number nikal lo
        const id = req.url.split("/")[2];
        req.rawListeners("User ID is" + id);
    } else {
        res.write("Page not Found")
    }
    res.end();
}).listen(3000);
console.log("Server is running on port 3000") //it is a different in js and node cause in node it is package(global)
console.log(process.argv)
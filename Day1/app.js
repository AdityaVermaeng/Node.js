// ** ** ** ** * Server created by node ** ** ** * 


const { log } = require("console");

const http = require("http");
const server = http.createServer((req, res) => {
    console.log("request url is", req.url);
    res.write("Hello from node");
    res.write("Server Created successfully");
    res.end();
})
server.listen(3000, () => {
    console.log("server is start.....!")
})
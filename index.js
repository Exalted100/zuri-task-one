const http = require("http");
const url = require("url");

const requestListener = function (req, res) {
    const pathName = req.url

    //Request to "/" - returns html
    if (pathName === "/") {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("<h1>A Simple Web Page<h1>");

    //request to "/api" - returns json
    } else if (pathName === "/api") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            name: "Fawaz Haroun", 
            country: "Nigeria", 
            hobby: "Reading"}));

    //request to "/string" - returns a string
    } else if (pathName === "/string") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello, Zuri!")
    }
}

//Server
const server = http.createServer(requestListener);
server.listen(8080);
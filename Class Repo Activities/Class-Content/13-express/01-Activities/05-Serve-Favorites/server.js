const http = require("http");
const fs = require("fs");
const PORT = 8080;

const handleRequest = (req, res) => {
    let path = req.url;

    switch (path) {

        case "/":
            return displayPage(res, "/index.html");

        case "/food":
            return displayPage(res, "/food.html");

        case "/movies":
            return displayPage(res, "/movies.html");

        case "/frameworks":
            return displayPage(res, "/frameworks.html");

        default:
            return displayPage(res, "error");
    }
}

const displayPage = (res, file) => {
    if (file == "error") {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<html><body><h1>404 not found</h1></body></html>");
    } else {
    fs.readFile(__dirname + file, function (err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
        });
    }
}


const server = http.createServer(handleRequest);

server.listen(PORT, function () {
    console.log("ZOMG SERVER ONLINE:  http://localhost:" + PORT)
});
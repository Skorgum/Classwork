const http = require("http");
const fs = require("fs");

const PORT = 8080;




const handleRequest = (req, res) => {
  const path = req.url;

  switch (path) {
    case "/":
      return getPages(res, "/index.html");
    case "/food":
      return getPages(res, "/food.html");
    case "/movies":
      return getPages(res, "/movies.html");
    case "/frameworks":
      return getPages(res, "/frameworks.html");
    default:
      getPages(res, "error");
  }
}

const getPages = (res, file) => {
  if (file == "error") {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<html><body><h1>404 not found</h1></body></html>");
  } else {
    fs.readFile(__dirname + file, (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    })
  }
}

const server = http.createServer(handleRequest);


server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
});
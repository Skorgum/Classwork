const http = require("http");
const PORT1 = 7000;
const PORT2 = 7500;

function handleRequest7000(request, response) {
    response.end("He who makes a beast of himself, gets rid of the pain of being a man - Dr. Johnson");
  }

function handleRequest7500(request, response) {
    response.end("We were somewhere around Barstow, at the edge of the desert, when the drugs began to take hold...");
}
const server1 = http.createServer(handleRequest7000);

const server2 = http.createServer(handleRequest7500);

server1.listen(PORT1, function() {
    console.log("Server listening on: http://localhost:" + PORT1);
});

server2.listen(PORT2, function() {
    console.log("Server listening on: http://localhost:" + PORT2);
});
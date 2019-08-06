var TV = require("./tv")
var fs = require("fs")

var tv = new TV();

var search = process.argv[2];
var term = process.argv.slice(3).join(" ");

function logResponse(data) {
    fs.appendFile("log.txt", "\r\n\r\n", function(err) {
        if (err) {
            return console.log(err);
        }
    });
    fs.appendFile("log.txt" , (data), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("\nlog.txt was updated!")
    })
}

if (!search) {
    search = "show";
}

if (!term) {
    term = "Andy Griffith"
}

if (search === "show") {
    console.log("searching for TV show")
    tv.findShow(term, logResponse);
} else {
    console.log("searching for TV actor")
    tv.findActor(term, logResponse)
}
var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf8", function(err, data) {
    if (err) {
        throw err;
    }
    var arr = data.split(",")
    var arrLength = arr.length;
    for (var i = 0; i < arrLength; i ++) {
        console.log(arr[i])
    }
})
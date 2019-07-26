var fs = require("fs");
var action = process.argv[2];
var value = process.argv[3];

if (action === "total") {
    fs.readFile("bank.txt", "utf8", function(error, data) {
        if (error) {
            throw error;
        }
        var bankArray = data.split(",")
        var total = 0
        for (var i = 0; i < bankArray.length; i ++) {
            total += parseFloat(bankArray[i])
        }
        console.log("You have a total of $" + total.toFixed(2))
    })
}

// console.log(trans)
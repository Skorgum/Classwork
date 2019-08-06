var inquirer = require("inquirer")
function Player(name, postition, offense, defense) {
    this.name = name;
    this.postition = postition;
    this.offense = offense;
    this.defense = defense;
}
Player.prototype.goodGame = function () {
    var coinFlip = Math.round(Math.random())
    if (coinFlip == 1) {
        this.offense++
    } else {
        this.defense++
    }
}
Player.prototype.badGame = function () {
    var coinFlip = Math.round(Math.random())
    if (coinFlip == 1) {
        this.offense--
    } else {
        this.defense--
    }
}
Player.prototype.printStats = function () {
    console.log(this.name + "\n" + this.postition + "\n" + this.offense + "\n" + this.defense)
}
var team = []

var addPlayer = function () {
    
    inquirer.prompt([
        {
            name: "name",
            message: "Please enter your name",
            validate: function (value) {
                if (isNaN(value)) {
                    return true;
                } else {
                    return false;
                }
            }
        }, {
            name: "position",
            message: "Enter your position (offense or defense)",
            validate: function (value) {
                if (value == "offense" || "defense") {
                    return true;
                } else {
                    return false;
                }
            }
        }, {
            name: "offense",
            message: "Enter your offense value (number between 1 & 10",
            validate: function (value) {
                if (isNaN(value)) {
                    return false;
                } else if (parseInt(value) < 1) {
                    return false;
                } else if (parseInt(value) > 10) {
                    return false;
                } else {
                    return true;
                }
            }
        }, {
            name: "defense",
            message: "Enter your defense value (number between 1 & 10)",
            validate: function (value) {
                if (isNaN(value)) {
                    return false;
                } else if (parseInt(value) < 1) {
                    return false;
                } else if (parseInt(value) >10) {
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])

}
addPlayer()
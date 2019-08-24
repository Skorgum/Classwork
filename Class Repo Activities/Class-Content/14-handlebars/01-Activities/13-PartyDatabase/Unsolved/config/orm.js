var connection = require("./connection.js");

var orm = {
    select: function(whatToSelect, table) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [whatToSelect, table], function(err, result) {
            if (err) throw err;
            console.log(result);
        })
    },
    selectWhere: function(whatToSelect, table, colToSearch, value) {
        var queryString = "SELECT ?? FROM ?? WHERE ?? = ?";
        connection.query(queryString, [whatToSelect, table, colToSearch, value], function(err, result) {
            if(err) throw err;
            console.log(result);
        })
    }
}

module.exports = orm;
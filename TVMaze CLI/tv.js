var axios = require("axios");
var fs = require("fs");



var TV = function() {
    this.findShow = function(show, callBack) {
        var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
        axios
        .get(URL)
        .then(function(response) {
            // console.log(response)
            let output = "\n==============================================================================================================================================" + "\n" +
            "\nShow Name: " + response.data.name + 
            "\nGenre: " + response.data.genres.join(", ") + 
            "\nAverage Rating: " + response.data.rating.average + 
            "\nNetwork: " + response.data.network.name +
            "\nPlot: " + response.data.summary +
            "\n" + "\n=============================================================================================================================================="
            console.log(output)
            callBack(output)
            })
    };
    this.findActor = function (actor, callBack) {
        var URL = "http://api.tvmaze.com/search/people?q=" + actor;
        axios
        .get(URL)
        .then(function(response) {
            console.log(response)
            let output = 
            "\n==============================================================================================================================================" + "\n" +
            "\nName: " + response.data[0].person.name +
            "\nBirthday: " + response.data[0].person.birthday +
            "\nGender: " + response.data[0].person.gender +
            "\nCountry: " + response.data[0].person.country.name +
            "\nTV Maze URL: " + response.data[0].person.url +
            "\n" + "\n=============================================================================================================================================="
            console.log(output)
            callBack(output)
        })
    }
};

module.exports = TV;
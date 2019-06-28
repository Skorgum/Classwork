// API key:  xujU62HhGPUvApn2I8qHGG7U7CGTcHrF
console.log("linked!")

$("#search-button").on("click", function() {
    var search = $("#search-term").text();
    var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=xujU62HhGPUvApn2I8qHGG7U7CGTcHrF";
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response) {
        console.log(response)
    })

})
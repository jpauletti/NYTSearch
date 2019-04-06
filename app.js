var begDateURL = "";
var endDateURL = "";

var searchTerm = "election";
var begYear = 2012;
var endYear = 2014;

begDateURL = "&begin_date=" + begYear + "0101";
endDateURL = "&end_date=" + endYear + "0101";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&facet_fields=source&facet=true" + begDateURL + endDateURL + "&api-key=I2gR0YwA1mWt0O2QXE7Ah9FNQ14fhccl";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);

});


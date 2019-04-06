var $resultsDiv= $("#results-main");
var begDateURL = "";
var endDateURL = "";

// submit/search button
$('button[type="submit"]').on("click", function(event) {

    // prevent page reload
    event.preventDefault();

    // get input values
    var searchTerm = $("#search-input").val();
    var begYear = $("#start-year").val();
    var endYear = $("#end-year").val();
    var numOfResults = $("#exampleFormControlSelect1").val();

    // if optional fields are included, set them up
    if (begYear !== "" && endYear !== "") {
        begDateURL = "&begin_date=" + begYear + "0101";
        endDateURL = "&end_date=" + endYear + "0101";
    }

    // put together query URL for API
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&facet_fields=source&facet=true" + begDateURL + endDateURL + "&page=1&api-key=I2gR0YwA1mWt0O2QXE7Ah9FNQ14fhccl";

    console.log(queryURL);

    // API call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // if results from previous search, clear them
        $("#results-main").empty();

        // create new array with the # of results user asked for
        var array = response.response.docs.slice(0, numOfResults);
        console.log("array: " + array);
        console.log(numOfResults);

        // create divs for each search result
        $.each(array, function(index, value) {

            var newDiv = $("<div>").addClass("search-result");
            var title = $("<h4>").text(array[index].headline.main);
            var date = $("<p>").text(array[index].pub_date);
            var link = $("<a>").attr("href", array[index].web_url).text(array[index].web_url);

            newDiv.append(title, date, link);

            $resultsDiv.append(newDiv);
        })

    });
})

// clear button
$('button[type="clear"]').on("click", function (event) {

    event.preventDefault();

    $("#results-main").empty();
});
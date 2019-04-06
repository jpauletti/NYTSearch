var $resultsDiv= $("#results-main");


var begDateURL = "";
var endDateURL = "";


$('button[type="submit"]').on("click", function(event) {

    console.log(queryURL);

    event.preventDefault();

    var searchTerm = $("#search-input").val();
    var begYear = $("#start-year").val();
    var endYear = $("#end-year").val();
    var numOfResults = $("#exampleFormControlSelect1").val();

    if (begYear !== "" && endYear !== "") {
        begDateURL = "&begin_date=" + begYear + "0101";
        endDateURL = "&end_date=" + endYear + "0101";
    }

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&facet_fields=source&facet=true" + begDateURL + endDateURL + "&page=1&api-key=I2gR0YwA1mWt0O2QXE7Ah9FNQ14fhccl";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        $("#results-main").empty();
        var array = response.response.docs.slice(0, numOfResults);
        console.log("array: " + array);
        console.log(numOfResults);

        $.each(array, function(index, value) {
            console.log(response);
            console.log(array[index].headline.main); // title
            console.log(array[index].web_url); // link to article    
            console.log(array[index].pub_date); // publish date 

            var newDiv = $("<div>");
            var title = $("<h3>").text(array[index].headline.main);
            var date = $("<p>").text(array[index].pub_date);
            var link = $("<a>").attr("href", array[index].web_url).text(array[index].web_url);

            newDiv.append(title, date, link);

            $resultsDiv.append(newDiv);
        })


    });

})
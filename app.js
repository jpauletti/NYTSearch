var begDateURL = "";
var endDateURL = "";

var searchTerm = "election";
var begYear = 2012;
var endYear = 2014;
var numOfResults = 5;

begDateURL = "&begin_date=" + begYear + "0101";
endDateURL = "&end_date=" + endYear + "0101";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&facet_fields=source&facet=true" + begDateURL + endDateURL + "&page=1&api-key=I2gR0YwA1mWt0O2QXE7Ah9FNQ14fhccl";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    response.response.docs.splice(10, );
    var array = response.response.docs.slice(0, 10);
    console.log("array: " + array);

    console.log(response);
    console.log(array[0].headline.main); // title
    console.log(array[0].web_url); // link to article    
    console.log(array[0].pub_date); // publish date 


});




var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);

// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"]
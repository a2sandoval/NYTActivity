
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" +
         "&api_key=963660807a3c404f8d3159459af6d1a1=&limit=10";
$.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(JSON) {

          console.log(JSON);

    var results = JSON.data;
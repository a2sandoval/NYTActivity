
// var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" +
//          "&api_key=963660807a3c404f8d3159459af6d1a1=&limit=10";
// $.ajax({
//         url: queryURL,
//         method: "GET"
//       }).then(function(JSON) {

//           console.log(JSON);

//     var copyRight = JSON.copyright;
//     var 

//     var searchQ = $();
// var begDate = $();
// var endDate = $();


var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "963660807a3c404f8d3159459af6d1a1",
  'q': searchQ;
  'begin_date': begDate;
  'end_date': endDate;
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});
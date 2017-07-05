var request = require('request');
var origin='Bangalore';
var destination='Chennai';
var travelMode="driving";
var apiKey="AIzaSyC_cOYmCEfjWoEiwJYiGulEFlzXtTPvKJo";
var reqURL="https://maps.googleapis.com/maps/api/distancematrix/json?origins="+origin+"&destinations="+destination+"&mode="+travelMode+"&key="+apiKey;
request(reqURL, function (error, response, body) {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  var json=JSON.parse(body);
  console.log('The distance between the two cities is',json.rows[0].elements[0].distance.text,"and the estimated travel duration is ",json.rows[0].elements[0].duration.text);
});

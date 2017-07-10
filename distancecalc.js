'use strict';
var beautify = require("json-beautify");
var prettyjson = require('prettyjson');
var request = require('request');
var origin;
var destination;
var travelMode="walking";
var apiKey="AIzaSyC_cOYmCEfjWoEiwJYiGulEFlzXtTPvKJo";
var reqURL;
var reJson='';
var userInput="how to reach from bengaluru to chennai"

const {Wit, log} = require('node-wit');

const client = new Wit({
  accessToken: 'WTEUVREKAIQ6LJQNEKUIYKPKOCS7WEIG',
});

client.message(userInput, {})
.then((data) => {
	//reJson=JSON.parse(data);
	origin=data.entities.location[0].value;
	destination=data.entities.location[1].value;
	console.log("Origin : "+origin);
	console.log("Destination : "+destination);
  	console.log(prettyjson.render(JSON.stringify(reJson)));

  //Distance Finding Block
	reqURL="https://maps.googleapis.com/maps/api/distancematrix/json?origins="+origin+"&destinations="+destination+"&mode="+travelMode+"&key="+apiKey;
	request(reqURL, function (error, response, body) {
	  //console.log('error:', error); // Print the error if one occurred
	  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	  //console.log('body:', body); // Print the HTML for the Google homepage.
	  //console.log(reqURL+"\n");
	  var json=JSON.parse(body);
	  console.log('The distance between the two cities is',json.rows[0].elements[0].distance.text,"and the estimated travel duration is ",json.rows[0].elements[0].duration.text);
});

//End Distance Block
})
.catch(console.error);


/*
reqURL="https://maps.googleapis.com/maps/api/distancematrix/json?origins="+origin+"&destinations="+destination+"&mode="+travelMode+"&key="+apiKey;
request(reqURL, function (error, response, body) {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  console.log(reqURL+"\n");
  var json=JSON.parse(body);
  console.log(JSON.stringify(json));
  console.log('The distance between the two cities is',json.rows[0].elements[0].distance.text,"and the estimated travel duration is ",json.rows[0].elements[0].duration.text);
});
*/
/*  This problem is the same as the previous problem (HTTP COLLECT) in that
  you need to use http.get(). However, this time you will be provided with
  three URLs as the first three command-line arguments.

  You must collect the complete content provided to you by each of the URLs
  and print it to the console (stdout). You don't need to print out the
  length, just the data as a String; one line per URL. The catch is that you
  must print them out in the same order as the URLs are provided to you as
  command-line arguments.
  */

var http = require('http');
//requires bl installed (used in exercise 8)
var bl = require('bl');
var results = [];
var count = 0;
var urls = process.argv.slice(2);
var urlsAmt = urls.length;

function printResults() {
  for (var i = 0; i < urlsAmt; i++) {
    console.log(results[i])
  }
};

function httpGet(index) {
  http.get(urls[index], function(response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }
      results[index] = data.toString()
      count++
      if (count === urlsAmt) {
        printResults()
      }
    }))
  })
};

for (var i = 0; i < urlsAmt; i++) {
    httpGet(i)
};
